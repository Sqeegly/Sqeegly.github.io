console.log("HIIIIII")
// get canvas item
let myCanvas =document.getElementById("my-canvas");
let ctx =myCanvas.getContext("2d");

// object position
let xPosition = 0;

function moveHorizontal () {
    // clear screen
ctx.clearRect(0, 0, 500, 500);
    // draw rect at current position
ctx.fillRect(xPosition, 0, 20, 20);
    // move the x position over by x pixels
xPosition += 1;
    // did i hit the wall? if so wrap around
    if (xPosition >= 500){
        xPosition = 0;
    }
}
setInterval (moveHorizontal, 10);