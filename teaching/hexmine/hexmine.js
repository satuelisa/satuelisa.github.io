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
var showpos = true;


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
	console.log('cell', this.row, this.column, 'contains', this.counter, 'at', this.x, this.y);
    }

    activate() {
	this.hidden = false;
	this.draw();
	if (this.counter == MINE) {
	    gameover();
	}
    }

    attempt() {
	if (this.counter != MINE) {
	    this.couuter = MINE;
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

	if (this.hidden) {
	    ctx.fillStyle = UNOPENED;
	    ctx.fill();
	    if (showpos) {
		ctx.strokeStyle = LABEL;
		let coords = this.row + ',' + this.column;
		ctx.strokeText(coords, this.x, this.y);
	    }
	} else {
	    ctx.fillStyle = COLOR[this.counter]; // reveal content	
	    ctx.fill();
	    ctx.strokeStyle = LABEL;
	    ctx.strokeText(this.counter, this.x, this.y);
	}
    }

    
}

let size = 0;
let width = 0;
let height = 0;
let hexheight = 0;
let unit = 0;

function setup() {
    ctx.font = Math.floor(size / 2) + "px Arial"; // label font
    
    // adjust the canvas to fit the grid
    let ch = hexheight * (height + 1); // canvas height     
    let cw = 2 * size * width;
    ctx.canvas.width = cw;
    ctx.canvas.height = ch    

    let x = size;
    for (let j = 0; j < width; j++) {
	grid.push([]); // first array dimension is the column
	let y = hexheight / 2; // starting one is touching the top
	if (j % 2 == 1) {
	    y *= 2; // twice that on odd columns
	}
	for (let i = 0; i < height; i++) {
	    var cell = new Hexagon(x, y, size, i, j);
	    cell.draw();
	    grid[j].push(cell); // second array dimension is the row
	    y += hexheight;
	}
	x += unit;
    }
}

function randint(high) {
    return Math.floor(high * Math.random());
}

function increment(c, r, span) {
    let c1 = grid[c][r];
    let x1 = c1.x;
    let y1 = c1.y;
    for (let i = c - 1; i <= c + 1; i++) {
	if (i < 0 || i >= width) {
	    continue;
	}
	for (let j = r - 1; j <= r + 1; j++) {
	    if (j < 0 || j >= height) {
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
    
function place(mines, span) {
    let placed = 0;
    let debugcount = 20;
    while (placed < mines) {
	let r = randint(height);
	let c = randint(width);
	if (grid[c][r].attempt()) {
	    increment(c, r, span);
	    placed++;
	} 
	debugcount--;
	if (debugcount == 0) {
	    console.log('PROBLEM: forcing exit from mine placement');
	    return;
	}
    }
}

function display(reveal) {
    console.log('redrawing');
    for (let r = 0; r < height; r++) {
	for (let c = 0; c < width; c++) {
	    grid[c][r].draw();
	}
    }

}

let active = false;

function create() {
    // this needs to be globally set so we can deal with events efficiently    
    // make sure these are numbers
    width = 1 * document.getElementById("width").value;
    height = 1 * document.getElementById("height").value;
    size = 1 * document.getElementById("size").value;
    unit = 1.5 * size; // a unit for rounding the event positions
    hexheight = size * Math.sqrt(3); // hexagon height

    let m = 1 * document.getElementById("mines").value;    
    document.getElementById("create").disabled = true;    
    
    setup();
    active = true;
    place(m, 2.5 * size); // leave some margin for the span for floating point arithmetic
    display(true);
}


RANGE = 3; // being lazy with the event mapping to the cells

// https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element
function click(src, e) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (active) {
	console.log('click at', x, y, '--- using unit value', unit);
	let c = Math.floor(x / unit);
	let r = Math.floor(y / unit);
	console.log('approximate cell', r, c);
	for (let i = c - RANGE; i <= c + RANGE; i++) {
	    if (i < 0 || i >= width) {
		continue;
	    }
	    for (let j = r - RANGE; j <= r + RANGE; j++) {
		if (j < 0 || j >= height) {
		    continue;
		}
		console.log(c, r);
		let cell = grid[i][j];
		let dx = cell.x - x;
		let dy = cell.y - y;
		if (Math.sqrt(dx * dx + dy * dy) < size) {
		    cell.status();
		    cell.activate(); // found it
		    return;
		}
	    }
	}
    }
}

canvas.addEventListener("mousedown", click);

function gameover() {
    alert("You lost");
    active = false;
    for (let j = 0; j < w; j++) {
	for (let i = 0; i < h; i++) {
	    grid[j][i].hidden = false;
	}
    }
    display(); // reveal
}
