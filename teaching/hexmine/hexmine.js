var canvas = document.getElementById("field");
var ctx = canvas.getContext("2d");    
ctx.lineWidth = 2;

// COLOR PALETTE

const BORDER = "#000000"; // black
const DEBUG = "#ff0000"; // red
const UNOPENED = "#444444"; // gray


// DEBUG STUFF

var circles = true;


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
	// make sure these are numbers
	this.x = 1 * x;
	this.y = 1 * y;
	this.l = 1 * l;
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
    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;
    let s = document.getElementById("size").value;

    let cw = s * w;
    let ch = s * h;
    
    ctx.canvas.width = cw;
    ctx.canvas.height = ch

    let x = cw / 2;
    let y = ch / 2;
    
    h = new Hexagon(x, y, s);
    h.draw()
    
}
