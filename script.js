const canvas = document.getElementById("canvas");
let color = document.querySelector('#color');
let sizes = document.querySelector('#sizes');
let onload = document.querySelector('#onload');

//Canva's height and width
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Canva context(pen)
let ctx = canvas.getContext("2d");
//Default pen size
ctx.lineWidth = 5;

let prevX = null;
let prevY = null;

let draw = false;

// Set draw to true when mouse is pressed
window.addEventListener("touchstart", (event) => draw = true);
// Set draw to false when mouse is released
window.addEventListener("touchend", (event) => draw = false);

window.addEventListener("touchmove", (event) => {
  // if draw is false then we won't draw
  if (prevX == null || prevY == null || !draw) {
    prevX = event.x;
    prevY = event.y;
    return;
  };
  let currentX = event.x;
  let currentY = event.y;

  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();

  prevX = currentX;
  prevY = currentY;
});

//Change color
color.addEventListener('change', event => {
  ctx.strokeStyle = color.value;
});
//Change size
sizes.addEventListener('change', event => {
  ctx.lineWidth = sizes.value;
});
//Delete all
onload.addEventListener('click', event => {
  window.location.reload();
});