document.getElementById("proc").disabled = true;
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");    

// input reading based on
// 1 https://stackoverflow.com/questions/16505333/get-the-data-of-uploaded-file-in-javascript
// 2 https://coderwall.com/p/jzdmdq/loading-image-from-local-file-into-javascript-and-getting-pixel-data
function read(e) {
    let allfiles = e.target.files; 
    let source = allfiles[0];
    let reader = new FileReader();
    img = new Image();
    let show = ( r ) => {
	document.getElementById("upload").src = r.result;
	document.getElementById("upload").style.display = "block";
	document.getElementById("proc").disabled = false;
    };
    reader.onload = () => show ( reader );
    reader.readAsDataURL(source);
}
document.getElementById("image").addEventListener("input", read);

function process() {
    let img = document.getElementById("upload");
    let iw = img.naturalWidth;
    let ih = img.naturalHeight;    
    let gw = document.getElementById("width").value;
    let gh = document.getElementById("height").value;

    ctx.canvas.width = iw;
    ctx.canvas.height = ih;    
    ctx.drawImage(img, 0, 0);
    img.style.display = "none";
    console.log(iw, ih);

    if (iw < gw || ih < gh) {
	alert('Image is too small: ' + iw + ' by ' + ih);
	return;
    }
    
    let s = document.getElementById("size").value + 'px';
    let g = document.getElementById("grid");
    g.innerHTML = ''; // erase
    
    let dw = Math.round(iw / gw);
    let dh = Math.round(ih / gh);
    console.log(dw, dh);

    const background = document.getElementById("bg").value;
    
    for (let j = 0; j < gh; j++) {
	for (let i = 0; i < gw; i++) {
	    var b = document.createElement("button");
	    let pixels = ctx.getImageData(i * dw, j * dh, dw, dh); // x (row) y (column) w h
	    // averaging based on https://stackoverflow.com/questions/44556692/javascript-get-average-color-from-a-certain-area-of-an-image
	    const values = pixels.data;
	    // fresh accumulators
	    let R = 0;
	    let G = 0;
	    let B = 0;
	    let count = 0;
	    for (let p = 0; p < values.length; p += 4) { // iterate over the pixels of the "cell"
		const red = values[p];
		const green = values[p + 1];
		const blue = values[p + 2];
		const alpha = values[p + 3];
		if (alpha > 0) {
		    const w = alpha / 255; // more transparent ones "count" less in the avarage
		    R += (red * w);
		    G += (green * w);
		    B += (blue * w);
		    count++;
		}
	    }
	    let color = background;
	    if (count > 0) { // if everything was not fully transparent
		color = '#';
		// two-digit enforcement hack from https://stackoverflow.com/questions/34977742/turning-numbers-to-hex-values-but-make-them-double-digits
		color += ('0' + Math.round(R / count).toString(16)).slice(-2); // average, then to hex, then preprend zero, then cut to two digits
		color += ('0' + Math.round(G / count).toString(16)).slice(-2);
		color += ('0' + Math.round(B / count).toString(16)).slice(-2);
		console.log(color, values.length / 4, count);
	    }
	    b.style.width = s;
	    b.style.height = s;
	    b.style.background = color;
	    g.appendChild(b);
	}
	g.appendChild(document.createElement("br"));
    }
}
