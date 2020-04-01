// Variables!
var color ="red";
var radius = 15;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x = 100;
var y = 75;
var penUp = false;
canvas.width = window.innerWidth *.75;
canvas.height = window.innerHeight *.75;
// var width = 0.75;
// var height = 0.75;
//You will want to add more
//When true, moving the mouse draws on the Canvas

//Listeners!!
// Mouse move listener
canvas.addEventListener('mousemove', function(e) {
  x = e.x;
  // console.log(x);
  y = e.y;
  // console.log(y);
  draw(e.pageX - radius, e.pageY - radius);
})
// Change color with keydown
draw();

window.addEventListener('keydown', function(e){
  console.log(e.keyCode);
  if (e.keyCode == 66){
    console.log(penUp);
    color = "rgb(0, 0, 255)";
    console.log("changed to blue");
  }
  else if (e.keyCode == 71){
    color = "rgb(0, 255, 0)";
    console.log("chaged to green");
  }

  else if(e.keyCode == 89){
    console.log("changed to yellow");
    color = "rgb(255, 255, 0)";

  }

  else if(e.keyCode == 82){
    console.log(penUp);
    console.log("changed to red");
    color = "rgb(255, 0, 0)";
  }
  else if (e.keyCode == 32){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("cleared canvas");
   }
   else if (e.keyCode == 38){
     penUp = true;
     // radius -= 15;
   }
   else if (e.keyCode == 40){
     penUp = false;
     // if (radius <15){
     //   radius += 15;
     // }

   }
   //   stopDraw();
   // }
})
clr.addEventListener("input", function(e){
  color = this.value;
  console.log(this.value);
})

//
// })
//
//
// }
//Add a listener for loading the window
window.addEventListener("load", function(e){
  console.log('page is loaded');

})
//Add a listener for the mouse movement
//Add a listener for the touch move
// window.addEventListener("touchmove", function(e){
//   draw();
//   var touch = e.touches[0];
//   var mouseEvent = new MouseEvent("mousemove",{
//     clientX: touch.clientX,
//     clientY: touch.cientY
//   });
//   canvas.dispatchEvent(mouseEvent);
//   console.log("i am drawing");
//   // draw();
// }, false)
window.addEventListener('touchmove', function(e){
  var touch = e.touches[0]
  x = touch.pageX;
  y = touch.pageY;
  console.log("I am drawing")
  draw(e.pageX - radius, e.pageY - radius)
})
// window.addEventListener('mousemove', function(e){
//   x = e.pageX;
//   y = e.pageY;
//   draw();
// })
//Add a listener for the keydown


// Functions!
// I would add a function for draw

function draw(posX, posY){
  if (penUp == false){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(posX, posY, radius, 0, 2*Math.PI);
    ctx.fill();
  }
}
