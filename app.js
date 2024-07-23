let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let CANVAS_WIDTH=canvas.width = window.innerWidth;
let CANVAS_HEIGHT=canvas.height = window.innerHeight;

const characterImg = new Image();
characterImg.src = 'assets/Sword_Run_Attack_full.png';

// Set the initial canvas dimensions when the document is fully loaded
window.addEventListener("load", () => {
  drawImage();
});
// Adjust the canvas dimensions when the window is resized
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawImage();
});
// Draw the img when its fully loaded
characterImg.addEventListener("load", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animate();
});

let sy = 2;
let sWidth = 512/8; 
let sHeight = 256/4; 
let dx = 0;
let dy = 0;
let gameFrame=0
let staggerFrame=3



function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 

  let position = Math.floor(gameFrame/staggerFrame)%8
  ctx.drawImage(characterImg, position*sWidth, sy*sHeight, sWidth, sHeight, dx, dy, canvas.width, canvas.height);

  gameFrame++;
  requestAnimationFrame(animate)
}
