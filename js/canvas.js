// Variables!
var color ="red";
var radius = 10;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x = 100;
var y = 75;
// var width = 50;
// var height = 50;
//You will want to add more

//Listeners!!
canvas.addEventListener('mousemove', function(e) {
  x = e.x;
  console.log(x);
  y = e.y;
  console.log(y);
  draw(e.pageX - radius, e.pageY - radius);
})
canvas.addEventListener('keydown', function(e){
  console.log(e);
  if (e.keyCode == 66);
    ctx.fillStyle = "#0000ff";
    console.log("changed to blue")
})
//Add a listener for loading the window
//Add a listener for the mouse movement
//Add a listener for the touch move
//Add a listener for the keydown


// Functions!
// I would add a function for draw
function draw(){
  console.log("I am going to draw a circle");
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x,y, radius, 0, 2 * Math.PI);
  ctx.fill();
}
