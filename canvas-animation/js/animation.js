console.log("HIIIIII")
// get canvas item
let myCanvas =document.getElementById("my-canvas");
let ctx =myCanvas.getContext("2d");

// object position
let xPosition = 0;
let yPosition = 0;
/*
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
} */


/*
function moveVertical() {
       // clear screen
ctx.clearRect(0, 0, 500, 500);
// draw rect at current position
ctx.fillRect(0, yPosition, 20, 20);
// move the x position over by x pixels
yPosition += 1;
// did i hit the wall? if so wrap around
if (yPosition >= 500){
    yPosition = 0;
}

}
*/
let xDirection = 1

function bounce(){
    

    
        // clear screen
    ctx.clearRect(0, 0, 500, 500);
        // draw rect at current position
    ctx.fillRect(xPosition, 0, 20, 20);
        // move the x position over by x pixels
    xPosition = xPosition + xDirection;
        // did i hit the wall? if so wrap around
        if (xPosition >= 490){
            xDirection = -1;     
}
if (xPosition <= 10) {
    xDirection = 1;
}
}

setInterval (bounce, 10);