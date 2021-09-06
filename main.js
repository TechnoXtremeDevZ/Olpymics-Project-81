canvas = document.getElementById("olympics_canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", logo_creation);

function logo_creation() {
    // Creation of the first circle
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(250, 193, 40, 0, Math.PI*2);
    ctx.stroke();
    // Creation of the second circle
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(350, 193, 40, 0, Math.PI * 2);
    ctx.stroke();
    // Creation of the third circle
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(300, 230, 40, 0, Math.PI * 2);
    ctx.stroke();
    // Creation of the fourth circle
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(450, 193, 40, 0, Math.PI * 2);
    ctx.stroke(); 
    // Creation of the fifth circle
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(400, 230, 40, 0, Math.PI * 2);
    ctx.stroke();
}