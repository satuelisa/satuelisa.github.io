var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var viewport = document.getElementById('viewport');
var labels = document.getElementsByName('label');
var output = document.getElementById('output');
var n = labels.length;
var radius = 30;
canvas.addEventListener('click', annotation, false);
var sx = undefined;
var sy = undefined;
var dataset = undefined;
var colors = {'green': '#00ff00',
	      'yellow': '#ffff00',
	      'red': '#ff0000',
	      'leafless': '#0000ff',
	      'ground': '#cccccc'};

function orthomosaic() {
    var flight = document.getElementById("flight");
    if  (flight.length ==  6) {
	flight.remove(0); // eliminate default
    }
    dataset = document.getElementById('flight').options[document.getElementById('flight').selectedIndex].value;
    var filename = dataset + '.png';
    console.log('Loading ' + filename);
    output.readonly = true;
    img = new Image();
    img.src = filename;
    canvas.width,canvas.height
    img.onload = function() {
	var w = this.width
	var h = this.height;;
	canvas.width = w;
	canvas.height = h;
	context.drawImage(img, 0, 0, w, h);
	sx = w / 2 - 400;
	sy = h / 2 - 300;	
	viewport.scrollTo(sx, sy);
	output.readonly = false;
	var now = new Date();
	output.value += '# ' + dataset + " " + now.toUTCString() + '\n';
    };
}

// https://stackoverflow.com/questions/4962710/get-mouse-position-in-scrollable-div
function relpos(aobj) {
    var currOffset = {
	x: 0,
	y: 0
    } 
    var newOffset = {
	x: 0,
	y: 0
    }    
    if (aobj !== null) {
	if (aobj.scrollLeft) { 
	    currOffset.x = aobj.scrollLeft;
	}
	if (aobj.scrollTop) { 
	    currOffset.y = aobj.scrollTop;
	} 
	if (aobj.offsetLeft) { 
	    currOffset.x -= aobj.offsetLeft;
	}
	if (aobj.offsetTop) { 
	    currOffset.y -= aobj.offsetTop;
	}
	if (aobj.parentNode !== undefined) { 
	    newOffset = relpos(aobj.parentNode);   
	}
	currOffset.x = currOffset.x + newOffset.x;
	currOffset.y = currOffset.y + newOffset.y; 
	console.log (aobj.id+' x'+currOffset.x+' y'+currOffset.y); 
    }
    return currOffset;
}

function annotation(e) {
    if (dataset != undefined) {
	var r= relpos(viewport);
	var x = e.clientX + r.x;
	var y = e.clientY + r.y;
	for (var i = 0; i < n; i++) {
	    if (labels[i].checked) {
		var color = labels[i].value;
		var annotation = dataset + ' ' + color + ' ' + Math.round(x) + ' ' + Math.round(y) + '\n';
		console.log(annotation);
		output.value += annotation;
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.strokeStyle = colors[color];
		context.lineWidth = 5;
		context.stroke();
		return;
	    }
	}
    }
}

function dump(e) {
    var timestamp = Math.floor(Date.now() / 1000); // seconds
    var blob = new Blob([output.value], {type:'text/plain'}); 
    var link = document.createElement("a");
    link.download = 'annotations' + timestamp + '.txt';
    link.innerHTML = "Download text";
    if (window.webkitURL != null) {
    	link.href = window.webkitURL.createObjectURL(blob);
    } else {
    	link.href = window.URL.createObjectURL(blob);
    	link.onclick = destroyClickedElement;
    	link.style.display = "none";
    	document.body.appendChild(link);
    }
    link.click();
    var imgurl = canvas.toDataURL("image/png");
    var imglink = document.createElement("a");
    imglink.download = 'annotations' + timestamp + '.png';
    imglink.innerHTML = "Download image";
    if (window.webkitURL != null) {
    	imglink.href = imgurl;
    } else {
    	imglink.href = imgurl;
    	imglink.onclick = destroyClickedElement;
    	imglink.style.display = "none";
    	document.body.appendChild(imglink);
    }
    imglink.click();
}
