// Variables!
var color ="red";
var radius = 10;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var x = 100;
var y = 75;
var colorWell;
// var width = 0.75;
// var height = 0.75;
//You will want to add more
//When true, moving the mouse draws on the Canvas

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
    color = "rgb(0, 0, 255)";
    ctx.fillStyle = color;
    console.log("changed to blue");
  }
  else if (e.keyCode == 71){
    color = "rgb(0, 255, 0)";
    ctx.fillStyle = color;
    console.log("chaged to green");
  }

  else if(e.keyCode == 89){
    console.log("changed to yellow");
    color = "rgb(255, 255, 0)";
    ctx.fillStyle = color;

  }

  else if(e.keyCode == 82){
    console.log("changed to red");
    color = "rgb(255, 0, 0)";
    ctx.fillStyle = color;
  }
  else if (e.keyCode == 32){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("cleared canvas");
   }
   // else if (e.keyCode == 38){
   //   stopDraw();
   // }
})
window.addEventListener("input", function(e){
  colorPicker = document.getElementById("clr");
  if (colorPicker == true){
    colorPicker.value = color;
    colorPicker.addEventListener("input", true);
    colorPicker.select();
    colorPicker.style.color = e.target.value;
  }
})
// window.addEventListener('load', startup, false);
// function startup(){
//   colorWell = document.querySelector('clr');
//   colorWell.value = color;
//   colorWell.addEventListener('input', updateFirst, false);
//   colorWell.addEventListener('change', updateAll, false);
//   colorWell.select();
// }
//
//
//
// function updateFirst(e){
//   var clr = document.querySelector("clr");
//     if (clr){
//       clr.style.color = e.taget.value;
//     }
// }
// function updateAll(e){
//   document.querySelectorAll("clr").forEach(function(clr){
//     clr.style.color = e.target.value;
//   });
// }



  // else if (e.keyCode == 32){
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   console.log("cleared canvas");
  // }




// window.addEventListener('keydown', function(e){
//   if (e.keyCode == 38){
//     mouseDown = false;
//   }
// })

// Color picker listener
// clr.addEventListener("input", function(e){
//   console.log("color Picker");
//   console.log(this);
//   console.log(e);
//
// })
//
//
// }
//Add a listener for loading the window
//Add a listener for the mouse movement
//Add a listener for the touch move
//Add a listener for the keydown


// Functions!
// I would add a function for draw
function draw(posX, posY){
  console.log("I am going to draw a circle");
  ctx.beginPath();
  ctx.fillStyle= color;
  ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
  ctx.fill();
}
function stopDraw(posX = 0, posY = 0){
  console.log("I am not going to draw");
  ctx.beginPath();
  ctx.fillStyle = Color;
  ctx.arc(0, 0, 0, 0, 2 * Math.PI);
  ctx.fill();
}
