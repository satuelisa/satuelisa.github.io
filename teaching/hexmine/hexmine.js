// FIELD

var grid = [];

// CANVAS

var canvas = document.getElementById("field");
var ctx = canvas.getContext("2d");    
ctx.lineWidth = 3;

// COLOR PALETTE

const BORDER = "#000000"; // black
const DEBUG = "#ff0000"; // red
const EMPTY = "#990099"; // purple
const UNOPENED = "#888888"; // light gray
const MINE = "#222222"; // dark gray

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
    constructor(x, y, l, r, c) {
	this.hidden = true;
	this.content = EMPTY;
	this.counter = 0;
	this.x = x;
	this.y = y;
	this.l = l;
	this.row = r;
	this.column = c;
    }

    status() {
	console.log(this.row, this.column, this.content);
    }

    attempt() {
	if (this.content == EMPTY) {
	    this.content = MINE;
	    // this.status();
	    return true;
	}
	return false;
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
/*	if (this.hidden) {
	    ctx.fillStyle = UNOPENED;
	} else { */
	ctx.fillStyle = this.content; // reveal content	
	//}
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
	if (!this.hidden && this.content == EMPTY) {
	    ctx.strokeText(this.counter, this.x, this.y);
	}
    }

    
}

function setup(w, h, s) {
    // hexagon height
    let hh = s * Math.sqrt(3);

    ctx.font = Math.floor(s / 2) + "px Arial"; // label font
    
    // adjust the canvas to fit the grid
    let ch = hh * (h + 1); // canvas height     
    let cw = 2 * s * w;
    ctx.canvas.width = cw;
    ctx.canvas.height = ch    

    let x = s;
    for (let j = 0; j < w; j++) {
	grid.push([]);
	let y = hh / 2; // starting one is touching the top
	if (j % 2 == 1) {
	    y *= 2; // twice that on odd columns
	}
	for (let i = 0; i < h; i++) {
	    var cell = new Hexagon(x, y, s, j, i);
	    cell.draw();
	    grid[j].push(cell);
	    y += hh;
	}
	x += 1.5 * s;
    }
}

function randint(high) {
    return Math.floor(high * Math.random());
}

function increment(c, r) {

}

function place(mines, width, height) {
    let placed = 0;
    let debugcount = 20;
    while (placed < mines) {
	let r = randint(height);
	let c = randint(width);
	if (grid[c][r].attempt()) {
	    increment(c, r);
	    placed++;
	} 
	debugcount--;
	if (debugcount == 0) {
	    console.log('PROBLEM: forcing exit from mine placement');
	    return;
	}
    }
}

function display(w, h, reveal) {
    console.log('redrawing');
    for (let r = 0; r < h; r++) {
	for (let c = 0; c < w; c++) {
	    grid[c][r].draw(reveal);
	}
    }

}

function create() {
    // make sure these are numbers
    let w = 1 * document.getElementById("width").value;
    let h = 1 * document.getElementById("height").value;
    let s = 1 * document.getElementById("size").value;
    let m = 1 * document.getElementById("mines").value;    

    setup(w, h, s);
    place(m, w, h);
    display(w, h, true);
}


