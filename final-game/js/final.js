console.log("milo is cute");
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

let playerX = 273;
let playerY = 273;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 1.5;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, 25, 20);
    
}
function drawMaze() {
    // X, Y, width, length 
    ctx.fillRect(300, 200, 20, 50);
    ctx.fillRect(250, 200, 20, 50);
    ctx.fillRect(50, 10, 100, 20);
    ctx.fillRect(125, 100, 20, 100);
    
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);
    playerY += (playerSpeed * playerYDir);
    //edge check
    if (playerX < 0){
playerX = 0;
    } else if (playerX > 500 - 100) {

playerX = 500 - 100;
    }
    if (playerY < 0){
        playerY= 0;
    } else if (playerY > 500 - 20){
    playerY = 500 - 20;
    }
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    drawMaze();

}
function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    // move player
    if (key === 37) {
        playerXDir = -1;
    } else if (key === 39) {
        playerXDir = 1;
    }
    if (key === 38) {
        playerYDir = -1;
    } else if (key === 40) {
        playerYDir = 1;
    }
}

// when key is released
function keyReleased(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key up code: " + key;

    // make player stop
    if (key === 37) {
        playerXDir = 0;
    } else if (key === 39) {
        playerXDir = 0;
    }
    if (key === 38) {
        playerYDir = 0;
    } else if (key === 40) {
        playerYDir = 0;
    }
}
setInterval(refreshUI, 30);