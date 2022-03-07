console.log("milo is cute");
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

let playerX = 300;
let playerY = 145;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 1.5;
let playerHeight = 15;
let playerWidth = 15;
xPosistion = [385, 105, 105, 100]
yPosistion = [125, 125, 105, 405]
widths = [20, 20, 300, 300]
heights = [300, 250, 20, 20]





function drawWalls() {
    for (let i = 0; i < xPosistion.length; i++) {
        ctx.fillRect(xPosistion[i], yPosistion[i], widths[i], heights[i]);
    }
}
function collisionCheckAll() {
    for (let i = 0; i < xPosistion.length; i++) {
        if (playerX + playerWidth >= xPosistion[i] && playerX <= xPosistion[i] + widths[i]) {
            if (playerY + playerHeight >= yPosistion[i] && playerY <= yPosistion[i] + heights[i]) {
                console.log("collision with block:" + i)
            }
        }
    }
}


function drawPlayer() {
    ctx.fillRect(playerX, playerY, 20, 15);
    
}
function drawMaze() {
    // X, Y, width, length 
    ctx.fillRect(340, 105, 15, 75);
    ctx.fillRect(150, 165, 200, 15);
    ctx.fillRect(200, 200, 200, 15);
    ctx.fillRect(200, 200, 15, 75);
    ctx.fillRect(385, 125, 20, 300);
    ctx.fillRect(105, 125, 20, 250);
    ctx.fillRect(105, 105, 300, 20);
    ctx.fillRect(240, 250, 15, 10);
    ctx.fillRect(240, 235, 120, 15);

    ctx.fillRect(100, 405, 300, 20);
    ctx.fillRect(150, 240, 65, 15);
    ctx.fillRect(110, 200, 65, 15);
    ctx.fillRect(200, 260, 55, 15);
    


    
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
  //  drawWalls();
  //  collisionCheckAll();

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