// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let golf = document.getElementById("golf");

// get paragraph items
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

// player position and movement
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 3;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
//image settings
const IMG_HEIGHT = 40;
const IMG_WIDTH = 40;
// ball position and movement
let ballX= 100;
let ballY= 100;
let ballXDir = 1.5;
let ballYDir = 2;
const BALL_RADIUS = 15;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, 100, 20);
    
}


function movePlayer() {
    playerX += (playerSpeed * playerXDir);
    playerY += (playerSpeed * playerYDir);
    //edge check
    if (playerX < 0){
playerX = 0;
    } else if (playerX > 500 - PADDLE_WIDTH) {

playerX = 500 - PADDLE_WIDTH;
    }
    if (playerY < 0){
        playerY= 0;
    } else if (playerY > 500 - 20){
    playerY = 500 - 20;
    }
}
function drawBall() {
    ctx.beginPath();
     ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}
function drawImage(){
ctx.drawImage(golf, ballX, ballY, IMG_WIDTH, IMG_HEIGHT);   
}

function moveBall(){
ballY += ballYDir;  
ballX += ballXDir;
}
function checkBallCollision() {
    if ((ballY > 500 - IMG_WIDTH)|| (ballY < 0 + IMG_HEIGHT)){
        ballYDir = ballYDir * -1;
    }
    if ((ballX > 500 - IMG_HEIGHT)|| (ballX < 0 + IMG_WIDTH)){
        ballXDir = ballXDir * -1;
    }

    if (ballX + IMG_WIDTH >= playerX && ballX - IMG_HEIGHT <= playerX + PADDLE_WIDTH && ballY + IMG_WIDTH >= playerY && ballY - IMG_HEIGHT <= playerY + PADDLE_HEIGHT){
        ballYDir = ballYDir * -1.01;

    }  
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    //animate ball
    checkBallCollision();
    moveBall();
    //drawBall();
    drawImage();
}

// when key is pressed
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

// object position
let xPosition = 0;

// rect moving horizontally
function moveHorizontal() {
    // clear screen
    ctx.clearRect(0, 0, 500, 500);
    // draw rect at current position
    ctx.fillRect(xPosition, 0, 20, 20);

    // move the x position over by x pixels
    xPosition += 1;

    // did I hit the wall? if so wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}

// #1 rect moving vertically then wrapping around
function moveVertical() {

}

// #2 rect bouncing horizontally
function bounceHorizontal() {

}

// #3 ball bouncing horizontally
function ballBounce() {

}

// extra challenge - have fun, bounce horizontally, ball grow and shrink,

//setInterval(moveHorizontal, 10);
setInterval(refreshUI, 30);

