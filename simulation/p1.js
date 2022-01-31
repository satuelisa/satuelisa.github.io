var on = false;
var can = document.getElementById("p1_canvas");
can.style.background = 'black';
var c = can.getContext("2d");
var l = 400;
var x = l / 2;
var y = l / 2;
var r = 20;

function play() {
    document.getElementById("p1_pause").disabled = false;
    document.getElementById("p1_play").disabled = true;
    if (x == 0 && y == 0) {
	x = l / 2;
	y = l / 2;
    }
    on = true;
    update();
}

function pause() {
    document.getElementById("p1_pause").disabled = true;
    document.getElementById("p1_play").disabled = false;
    on = false;
}

function draw() {
    c.clearRect(0, 0, l, l); 
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.fillStyle = "yellow";
    c.fill();
    c.stroke();
}

var delay = 3000;

window.again = (function(callback) {
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, delay);
        };
})();

function update() {
    draw();
    var change = r;
    if (Math.random() < 0.5) {
	change *= -1;
    }
    if (Math.random() < 0.5) {
	x += change;
	if (x < r || x > l - r) {
	    x = 0;
	    y = 0;
	    on = false;
	}
    } else {
	y += change;
	if (y < r || y > l - r) {
	    x = 0;
	    y = 0;
	    on = false;
	}
    }
    if (on) {
	again(function() {
	    update();
	});
    } else {
	document.getElementById("p1_pause").disabled = true;
	document.getElementById("p1_play").disabled = false;
    }

}

draw();
