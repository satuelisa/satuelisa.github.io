document.addEventListener("keydown", keyDownTextField, false);

// cross-origin block shoots down this avenue :(
/* 
let books = { 
    'Pride and Prejudice by Jane Austin':
    'https://www.gutenberg.org/cache/epub/1342/pg1342-images.html',
    //   'https://gutenberg.org/cache/epub/1342/pg1342.txt',
    'Moby Dick by Herman Melville':
    'https://www.gutenberg.org/cache/epub/2701/pg2701-images.html',
    // 'https://gutenberg.org/cache/epub/2701/pg2701.txt',
    'Frankenstein by Mary Shelley':
    'https://www.gutenberg.org/cache/epub/84/pg84-images.html'
    //     'https://gutenberg.org/cache/epub/84/pg84.txt'    
};

let content = {};

let bs = document.getElementById("book");
for (var book in books) {
  var url = books[book];
  bs.options[bs.options.length] = new Option(book, url);
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.send(null);
  request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
          content[url] = request.responseText;
      }
  }
}
*/

// word list taken from https://www.devtoolsdaily.com/blog/random-text-javascript/
const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'];

function randomWord() {
    let r = Math.random() * words.length;
    return words[Math.floor(r)];
}

function textSample() {
    let wc = document.getElementById("length").value;
    let text = '';
    for (let i = 0; i < wc; i++) {
	text = text + ' ' + randomWord();
    }
    document.getElementById("what").innerHTML = text;
}


let previous = null;
let timestamp = null;
let data = null;
let matches = null;

function dump() {
    matches = [];
}

dump();

function status() {
    document.getElementById("who").disabled = !training();
    document.getElementById("ab").disabled = training();    
}

status();


function reset() {
    document.getElementById("veredict").innerHTML = '';
    document.getElementById("input").value = '';
    console.log('Cleared');
}

function erase() {
    data = {};
    document.getElementById("stage").value = 'train';
    reset();
    status();
}

erase();

function currentStage() {
    return document.getElementById("stage").value;
}

function currentTypist() {
    return document.getElementById("who").value;
}

function training() {
    return (currentStage() == "train");
}

function analyze() {
    let counts = {};
    let n = matches.length;
    let highscore = 0;
    for (let m = 0; m < n; m++) {
	let d = matches[m];
	if (!counts.hasOwnProperty(d)) {
	    counts[d] = 0;
	}
	counts[d]++;
	if (counts[d] > highscore) {
	    highscore = counts[d];
	}
    }
    var result = '[ ';
    for (person in data) {
	if (counts.hasOwnProperty(person) && counts[person] == highscore) {
	    result += person + ' ';
	}
    }
    result += ']';
    document.getElementById("veredict").innerHTML = 'Based on ' + n + ' keystrokes, the person typing was ' + result;
}

// sume of squared differences
function ssqd(stored, observed) {
    let total = 0;
    let n = stored.length;
    if (n == 0) {
	return Infinity;
    }
    for (let s = 0; s < n; s++) {
	let d = stored[s] - observed;
	total += (d * d);
    }
    return total;
}

function keyDownTextField(e) {
    let current = e.keyCode;
    if (previous != null) {
	let diff = Date.now() - timestamp;
	if (training()) {
	    let m = currentTypist();
	    if (!(data.hasOwnProperty(m))) {
		data[m] = {};
	    }
	    if (!(data[m].hasOwnProperty(previous))) {
		data[m][previous] = {};
	    }
	    if (!(data[m][previous].hasOwnProperty(current))) {
		data[m][previous][current] = [];
	    }
	    data[m][previous][current].push(diff);
	} else { // comparing 
	    let smallest = null;
	    let match = null;
	    for (person in data) {
		let err = 0;
		let present = false;
		let samples = data[person];
		if (samples.hasOwnProperty(previous)) {
		    let timings = samples[previous];
		    if (timings.hasOwnProperty(current)) {
			err += ssqd(timings[current], diff);
			present = true;
		    }
		}
		if (present && (smallest == null || err < smallest)) {
		    smallest = err;
		    match = person;
		}
	    }
	    if (match != null) {
		matches.push(match);
	    }
	}
    }
    previous = current;
    timestamp = Date.now();
}
