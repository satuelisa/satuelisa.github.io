var canvas = document.getElementById("field");
var ctx = canvas.getContext("2d");    
ctx.lineWidth = 3;

// COLOR PALETTE

const BORDER = "#000000"; // black
const DEBUG = "#ff0000"; // red
const UNOPENED = "#888888"; // gray


// DEBUG STUFF

var circles = false;


// HEXAGONS

const ANGLE = 120; // hexagons have 120 degree angles
const COUNT = 6; // hexagona have 6 sides
const FC = 2 * Math.PI; // full circle
function d2r(d) { // degrees to radians
    return FC * (d / 360.0);
}

class Hexagon {
    constructor(x, y, l) {
	this.state = UNOPENED;
	this.x = x;
	this.y = y;
	this.l = l;
	console.log(x, y);
    }

    draw() {

	if (circles) {
	    ctx.strokeStyle = DEBUG;
	    ctx.beginPath();
	    ctx.arc(this.x, this.y, this.l, 0, FC); // circles to debug the placement
	    ctx.closePath();
	    ctx.stroke();	    
	}
	
	ctx.strokeStyle = BORDER;
	ctx.fillStyle = this.state;
	let as = -d2r(180 - ANGLE); // complement angle as the step (spin around the center counterclockwise)
	let sx = this.x + this.l; // start mid right
	let sy = this.y;
	ctx.beginPath();
	ctx.moveTo(sx, sy); 
	for (let i = 0; i <= COUNT; i++) {
	    let ex = this.x + Math.cos(i * as) * this.l;
	    let ey = this.y + Math.sin(i * as) * this.l;
	    // console.log(sx, sy, ex, ey);
	    // ctx.fillText(i, sx, sy);
	    ctx.lineTo(ex, ey);
	    sx = ex;
	    sy = ey;
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	    	
    }

    
}

function create() {
    // make sure these are numbers
    let w = 1 * document.getElementById("width").value;
    let h = 1 * document.getElementById("height").value;
    let s = 1 * document.getElementById("size").value;
    console.log(w, h, s);
    
    let cw = 2 * s * w;
    let hh = s * Math.sqrt(3);

    // hexagon height
    let ch = hh * (h + 1); // canvas height 
    
    ctx.canvas.width = cw;
    ctx.canvas.height = ch

    let x = s;
    for (let j = 0; j < w; j++) {
	let y = hh / 2; // starting one is touching the top
	if (j % 2 == 1) {
	    y *= 2; // twice that on odd columns
	}
	for (let i = 0; i < h; i++) {
	    new Hexagon(x, y, s).draw();
	    y += hh;
	}
	x += 1.5 * s;
    }
}
