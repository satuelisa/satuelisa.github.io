// FIELD

var grid = [];

// CANVAS

var canvas = document.getElementById("field");
var ctx = canvas.getContext("2d");    
ctx.lineWidth = 3;

// COLOR PALETTE

const MINE = 7;
const BORDER = "#000000"; // black
const LABEL = "#ffffff"; // white
const DEBUG = "#ff0000"; // red
// colors from https://www.learnui.design/tools/data-color-picker.html
const COLOR = [ "#999999", 
		"#003f5c",
		"#444e86",
		"#955196",
		"#dd5182",
		"#ff6e54",
		"#ffa600",
		"#222222" // 7 will mean MINE
	      ];
const UNOPENED = "#666666"; // light gray

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
	if (this.counter != MINE) {
	    this.counter = MINE;
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
	ctx.strokeStyle = BORDER;	
	ctx.stroke();

	/*	if (this.hidden) {
	    ctx.fillStyle = UNOPENED;
	} else { */
	//}
	
	ctx.fillStyle = COLOR[this.counter]; // reveal content	
	ctx.fill();
	ctx.strokeStyle = LABEL;
	ctx.strokeText(this.counter, this.x, this.y);
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

function increment(c, r, w, h, span) {
    let c1 = grid[c][r];
    let x1 = c1.x;
    let y1 = c1.y;
    for (let i = c - 1; i <= c + 1; i++) {
	if (i < 0 || i == w) {
	    continue;
	}
	for (let j = r - 1; j <= r + 1; j++) {
	    if (j < 0 || j == h) {
		continue;
	    }
	    let c2 = grid[i][j];
	    let x2 = c2.x;
	    let y2 = c2.y;
	    let dx = (x1 - x2);
	    let dy = (y1 - y2);
	    let sep = Math.sqrt(dx * dx + dy * dy);
	    if (sep < span) {
		if (c2.counter < MINE) { // not a mine itself
		    c2.counter++;
		}
	    }
	}    
    }
}
    
function place(mines, width, height, span) {
    let placed = 0;
    let debugcount = 20;
    while (placed < mines) {
	let r = randint(height);
	let c = randint(width);
	if (grid[c][r].attempt()) {
	    increment(c, r, width, height, span);
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

    var grid = []; // reset    
    setup(w, h, s);
    place(m, w, h, 2.5 * s); // leave some margin for the span for floating point arithmetic
    display(w, h, true);
}


