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
// Mouse move listener
canvas.addEventListener('mousemove', function(e) {
  x = e.x;
  console.log(x);
  y = e.y;
  console.log(y);
  draw(e.pageX - radius, e.pageY - radius);
})
// Change color with keydown
draw();

window.addEventListener('keydown', function(e){
  console.log(e.keyCode);
  if (e.keyCode == 66){
    ctx.fillStyle = "rgb(0, 0, 255)";
    console.log("changed to blue");
  }
  if (e.keyCode == 71){
    ctx.fillStyle = "rgb(0, 255, 0)";
    console.log("chaged to green");
  }

  if(e.keyCode == 89){
    console.log("changed to yellow");
    ctx.fillStyle = "rgb(255, 255, 0)";

  }

  if(e.keyCode == 82){
    console.log("changed to red");
    ctx.fillStyle = "rgb(255, 0, 0)";

  }

  if (e.keyCode == 32){
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    console.log("cleared canvas");
  }

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
