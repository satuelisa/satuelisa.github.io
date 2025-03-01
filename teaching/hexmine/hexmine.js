var canvas = document.getElementById("field");
var ctx = canvas.getContext("2d");    

function create() {
    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;
    let s = document.getElementById("size").value;
    
    ctx.canvas.width = s * w;
    ctx.canvas.height = s * h;    
}
