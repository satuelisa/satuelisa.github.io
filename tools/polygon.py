#!/usr/bin/env python3
"""

vibecoded with Claude.ai

polygon.py — Crop an image to a regular polygon, with zoom and alignment.

zoom=1.0  → largest polygon that fits the image (maximum coverage)
zoom=0.8  → polygon radius is 80% of the maximum (smaller hexagon, same pixel scale)
zoom=0.5  → polygon radius is 50% of the maximum

The alignment controls which part of the image the polygon is centred over.

Usage:
    python hexcrop.py input.png [options]

Options:
    --sides N          Number of polygon sides (default: 6)
    --halign ALIGN     Horizontal alignment: left | center | right  (default: center)
    --valign ALIGN     Vertical alignment:   top  | center | bottom (default: top)
    --zoom FLOAT       Zoom factor 0 < zoom <= 1.0 (default: 0.8)
    --output FILE      Output filename (default: output.png)
"""

import argparse
import math
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw
except ImportError:
    sys.exit("Pillow is required: pip install Pillow --break-system-packages")


def regular_polygon_points(cx, cy, radius, sides, rotation_deg=0.0):
    points = []
    for i in range(sides):
        angle = math.radians(rotation_deg + i * 360 / sides)
        points.append((cx + radius * math.cos(angle),
                        cy + radius * math.sin(angle)))
    return points


def largest_radius(width, height, sides, rotation_deg):
    """Binary-search the largest radius so the polygon fits the image rectangle."""
    lo, hi = 0.0, min(width, height) / 2.0 * 1.5
    cx, cy = width / 2, height / 2
    for _ in range(64):
        mid = (lo + hi) / 2
        pts = regular_polygon_points(cx, cy, mid, sides, rotation_deg)
        if all(0 <= x <= width and 0 <= y <= height for x, y in pts):
            lo = mid
        else:
            hi = mid
    return lo


def autocrop(img):
    """Remove all-transparent border rows and columns."""
    bbox = img.getchannel("A").getbbox()
    return img.crop(bbox) if bbox else img


def crop_to_polygon(image_path, sides=6, halign="center", valign="top",
                    zoom=0.8, output_path="output.png"):

    img = Image.open(image_path).convert("RGBA")
    w, h = img.size

    # Flat-top hexagon: 90° rotation so flat edges are at top and bottom
    rotation_deg = 90.0 if sides == 6 else 0.0

    # Maximum radius at zoom=1
    radius_max = largest_radius(w, h, sides, rotation_deg)

    # Actual radius: scale down by zoom factor
    radius = radius_max * zoom

    # Half-extents of this polygon's bounding box
    pts_unit = regular_polygon_points(0, 0, radius, sides, rotation_deg)
    poly_hw = max(abs(x) for x, _ in pts_unit)   # half-width
    poly_hh = max(abs(y) for _, y in pts_unit)   # half-height

    # Centre of the polygon in original-image coordinates.
    # Alignment means the polygon is pushed toward that edge of the image.
    if halign == "left":
        cx = poly_hw                    # left edge of polygon at x=0
    elif halign == "right":
        cx = w - poly_hw                # right edge of polygon at x=w
    else:
        cx = w / 2

    if valign == "top":
        cy = poly_hh                    # top edge of polygon at y=0
    elif valign == "bottom":
        cy = h - poly_hh                # bottom edge of polygon at y=h
    else:
        cy = h / 2

    # Clamp so the polygon never exceeds the image bounds
    cx = max(poly_hw, min(w - poly_hw, cx))
    cy = max(poly_hh, min(h - poly_hh, cy))

    # Output canvas = polygon bounding box
    out_w = int(round(2 * poly_hw))
    out_h = int(round(2 * poly_hh))

    # Crop the source region from the original image (same size as output)
    sx0 = cx - poly_hw
    sy0 = cy - poly_hh
    sx1 = cx + poly_hw
    sy1 = cy + poly_hh

    int_x0 = max(0, int(math.floor(sx0)))
    int_y0 = max(0, int(math.floor(sy0)))
    int_x1 = min(w, int(math.ceil(sx1)))
    int_y1 = min(h, int(math.ceil(sy1)))

    raw = img.crop((int_x0, int_y0, int_x1, int_y1))

    # Pad with transparency if crop went outside image bounds
    if raw.size != (out_w, out_h):
        padded = Image.new("RGBA", (out_w, out_h), (0, 0, 0, 0))
        padded.paste(raw, (int(math.floor(int_x0 - sx0)),
                           int(math.floor(int_y0 - sy0))))
        raw = padded

    # Resize to exact output dimensions (handles sub-pixel differences)
    source = raw.resize((out_w, out_h), Image.LANCZOS)

    # Build polygon mask centred in the output canvas
    mask = Image.new("L", (out_w, out_h), 0)
    draw = ImageDraw.Draw(mask)
    pts = regular_polygon_points(out_w / 2, out_h / 2,
                                 radius, sides, rotation_deg)
    draw.polygon(pts, fill=255)

    # Apply mask
    result = Image.new("RGBA", (out_w, out_h), (0, 0, 0, 0))
    result.paste(source, mask=mask)

    # Trim fully-transparent border rows/columns
    result = autocrop(result)

    result.save(output_path, "PNG")
    rw, rh = result.size
    print(f"Saved: {output_path}  ({rw}×{rh} px, {sides}-sided polygon, "
          f"zoom={zoom}, radius={radius:.1f} px (max={radius_max:.1f}), "
          f"halign={halign}, valign={valign})")


def main():
    parser = argparse.ArgumentParser(
        description="Mask an image to a regular polygon with zoom and alignment."
    )
    parser.add_argument("input",    help="Input image (PNG, JPG, …)")
    parser.add_argument("--sides",  type=int,   default=6,
                        help="Number of polygon sides (default: 6)")
    parser.add_argument("--halign", choices=["left", "center", "right"],
                        default="center",
                        help="Horizontal alignment (default: center)")
    parser.add_argument("--valign", choices=["top", "center", "bottom"],
                        default="top",
                        help="Vertical alignment (default: top)")
    parser.add_argument("--zoom",   type=float, default=0.8,
                        help="Polygon size as fraction of maximum (default: 0.8)")
    parser.add_argument("--output", default="output.png",
                        help="Output filename (default: output.png)")

    args = parser.parse_args()

    if not Path(args.input).exists():
        sys.exit(f"File not found: {args.input}")
    if not (0 < args.zoom <= 2.0):
        sys.exit("--zoom must be > 0")

    crop_to_polygon(
        image_path=args.input,
        sides=args.sides,
        halign=args.halign,
        valign=args.valign,
        zoom=args.zoom,
        output_path=args.output,
    )


if __name__ == "__main__":
    main()
