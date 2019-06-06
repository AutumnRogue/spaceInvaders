let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 0;
let dy = -4;
let bulletRadius = 3;
let bulletStatus = false

let heroWidth = 50;
let heroHeight = 10;
let heroX = (canvas.width-heroWidth)/2;
let heroY = canvas.height-30;
let rightPressed = false;
let leftPressed = false;
let bulletX = x
let bulletY = y

let alienRowCount = 4;
let alienColumnCount =10;
let alienWidth = 50;
let alienHeight = 20;
let alienPadding = 22;
let alienOffsetTop = 30;
let alienOffsetLeft = 30;

let counterX = 0;
let counterY = 0;

let score = 0;
let lives = 3;

let aliens = [];
for(let c=0; c<alienColumnCount; c++){
    aliens[c]=[];
    for(let r=0; r<alienRowCount; r++){
        aliens[c][r] = { x:0, y:0, status:1}
    }
}

function animationWait(time){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, time);
    });
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);

function collisionDetection(){
    for(let c=0;c<alienColumnCount;c++){
        for(let r=0;r<alienRowCount;r++){
            let b = aliens[c][r];
            if(b.status == 1){
            if(bulletX >b.x && bulletX < b.x+alienWidth && bulletY > b.y && bulletY < b.y+alienHeight){
                b.status = 0;
                score++
                }
            }
        }
    }
}

function drawScore(){
    ctx.font = '16px Courier';
    ctx.fillStyle = 'white';
    ctx.fillText("Score: "+score, 8, 20)
}
function drawLives() {
    ctx.font = '16px Courier';
    ctx.fillStyle = 'white';
    ctx.fillText("Lives: "+lives, canvas.width-85,20);
}

let drawHero = () => {
    ctx.beginPath();
    ctx.rect(heroX, heroY, heroWidth, heroHeight)
    ctx.fillStyle = 'white'
    ctx.fill();
    ctx.closePath();
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function drawAliens() {
    for ( let c=0;c<alienColumnCount;c++){
        for(let r=0;r<alienRowCount;r++){
            if(aliens[c][r].status == 1){
            let alienX = (c*(alienWidth+alienPadding))+alienOffsetLeft;
            let alienY = (r*(alienHeight+alienPadding))+alienOffsetTop;
            aliens[c][r].x = alienX;
            aliens[c][r].y = alienY;
            ctx.beginPath();
            ctx.rect(alienX,alienY,alienWidth,alienHeight);
            ctx.fillStyle = 'white'
            ctx.fill();
            ctx.closePath;
            }
        }
    }
}

async function moveAliens() {
if(counterX < 4){
alienOffsetLeft += 50
counterX++
}
await animationWait(4000)
if(counterY < 1){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 8){
    alienOffsetLeft -= 50
    counterX++
}
await animationWait(4000)
if(counterY < 2){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 12){
    alienOffsetLeft += 50
    counterX++
}
await animationWait(4000)
if(counterY < 3){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 16){
    alienOffsetLeft -= 50
    counterX++
}
await animationWait(4000)
if(counterY < 4){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 20){
    alienOffsetLeft += 50
    counterX++
}
await animationWait(4000)
if(counterY < 5){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 24){
    alienOffsetLeft -= 50
    counterX++
}
await animationWait(4000)
if(counterY < 6){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 28){
    alienOffsetLeft += 50
    counterX++
}
await animationWait(4000)
if(counterY < 7){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 32){
    alienOffsetLeft -= 50
    counterX++
}
await animationWait(4000)
if(counterY < 8){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)
if(counterX < 36){
    alienOffsetLeft += 50
    counterX++
}
await animationWait(4000)
if(counterY < 9){
    alienOffsetTop += 50
    counterY++
}
await animationWait(1000)

// alert("Game Over")
} 

// let fireBullet = () => {
//     ctx.beginPath();
//     ctx.arc(bulletX,bulletY,bulletRadius,0,Math.PI*2);
//     ctx.fillStyle = 'red'
//     ctx.fill();
//     ctx.closePath();
// }

document.onkeydown = async function(e){
    if(e.key === 'x'){
        for(i=0;i<300;i++){
       bulletX += dx
       bulletY += dy
       await animationWait(5)
        }
    }
}



// let move = async()=>{
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     await animationWait(1000)
//     moveAliens()
//     requestAnimationFrame(move)
// }

let bullet = () => {
    ctx.beginPath();
    ctx.arc(bulletX,bulletY,bulletRadius,0,Math.PI*2);
    ctx.fillStyle = 'limegreen'
    ctx.fill();
    ctx.closePath();
    

}



let draw = async()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawHero();
    drawAliens();
    collisionDetection();
    drawScore();
    drawLives();
    bullet();
    
    

    
    if(rightPressed && heroX < canvas.width - heroWidth){
        heroX += 7;
        bulletX += 7;
    } else if (leftPressed && heroX > 0){
        heroX -= 7;
        bulletX-=7;
    }
    // x += dx;
    // y += dy;
requestAnimationFrame(draw);
}


draw()
move()