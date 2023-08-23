var playerPaddle, playerPaddleAni;
var life=3;
var wins;
var leftEdge;
var rightEdge;
var downEdge;
var song,hit,memeestourado;
var upEdge;
var score;
var ball,ball1;
var botPaddle, botPaddleAni;
var edges;

function preload(){
 playerPaddleAni=loadAnimation("idle.png","leftani.png");
 ball1=loadImage("ball.png");
 botPaddleAni=loadAnimation("bot.png","botleft.png");
 song=loadSound("theChosenOne.mp3");
 memeestourado=loadSound("memeestourado.mp3");
 hit=loadSound("hit.mp3");


}

function setup(){
  createCanvas(1495,745);
  playerPaddle=createSprite(200,300);
  leftEdge=createSprite(12,390,10,900);
  rightEdge=createSprite(1450,390,10,900);
  downEdge=createSprite(800,760,1600,10);
  upEdge=createSprite(160,-16,16000,10);
  botPaddle=createSprite(1300,300);
playerPaddle.addAnimation("Player",playerPaddleAni);
botPaddle.addAnimation("bot",botPaddleAni);
 ball=createSprite(600,100);
  ball.addImage(ball1);
  ball.velocityX=10;
  song.play();
  song.setVolume(0.5);
  ball.velocityY=10;
  //botPaddle.velocityY=19;
  ball.setCollider("rectangle",0,0,20,20);
  playerPaddle.setCollider("rectangle",0,0,40,50);
  botPaddle.setCollider("rectangle",0,0,40,50);
  score=0;
  wins=0;
  leftEdge.visible=false;
  rightEdge.visible=false;
  downEdge.visible=false;
  upEdge.visible=false;
  playerPaddle.scale=3;
  botPaddle.scale=3;
}

function draw() {
 background("orange");
 if(ball.isTouching(playerPaddle)){
  score+=10;
  hit.play();
 }
 if(keyDown("B")){
  song.stop();
  memeestourado.play();
  fill("red");
  textSize(30);
  text("TECLA SECRETA ATIVADA HUE HUE HUE",450,390);
  wins+=1;
  
  
 }
 if(ball.isTouching(botPaddle)){
  score+=10;
  hit.play();
 }
 if(ball.isTouching(leftEdge)){

life-=1
ball.x=740;
ball.y=350;
 }
 if(ball.isTouching(upEdge)){
  ball.x=740;
  ball.y=350;
   }
 if(score===100){
ball.velocityY=13;
ball.velocityX=13;
textSize(20);
playerPaddle.velocityY=22;
wins+=1;
fill("yellow");
text("Hard Mode Activated!",520,390);
 }
 if(score===200){
  ball.velocityY=17;
  ball.velocityX=17;
  textSize(20);
  playerPaddle.velocityY=24;
  wins+=1;
  fill("purple");
  text("Super Hard Mode Activated!",520,390);
   }
   if(score===300){
    ball.velocityY=19;
    ball.velocityX=19;
    textSize(20);
    playerPaddle.velocityY=27;
    wins+=1;
    fill("red");
    text("GOD Mode Activated!",520,390);
     }
     if(score===400){
      ball.velocityY=20;
      ball.velocityX=20;
      textSize(20);
      wins+=1;
      playerPaddle.velocityY=29;
      fill("pink");
      text("Impossible Mode Activated!",520,390);
       }
       if(score===500){
        ball.velocityY=21;
        ball.velocityX=21;
        textSize(20);
        wins+=1;
        playerPaddle.velocityY=30;
        fill("green");
        text("Deathrun Mode Activated!",520,390);
         }
         if(score===1000){
          ball.velocityY=23;
          ball.velocityX=23;
          textSize(20);
          wins+=1;
          playerPaddle.velocityY=32;
          fill("blue");
          text("Viciado Mode Activated!",520,390);
           }

 if(ball.isTouching(rightEdge)){
  ball.x=740;
  ball.y=350;
 }
 if(ball.isTouching(downEdge)){
  ball.x=740;
  ball.y=350;
 }
if(life===0){
textSize(40);
fill("blue");
text("You Lose! Click F To Try Again!",450,390);
  reset();


}
 if(keyDown("down")){
  playerPaddle.y+=20;
  }
  if(keyDown("up")){
    playerPaddle.y-=20;
    }
  ball.bounceOff(playerPaddle);
  ball.bounceOff(botPaddle);
  edges=createEdgeSprites();
  //botPaddle.bounceOff(edges[3]);
  //botPaddle.bounceOff(edges[2]);
  edges=createEdgeSprites();
 ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
 playerPaddle.collide(edges[3]);
 playerPaddle.collide(edges[2]);
 textSize(20);
 fill("blue");
 text("SCORE: "+score,10,20);
 fill("purple");
 text("BETA BY CUBENATOR",10,110)
 fill("red");
text("LIFE: "+life,10,50);
fill("yellow");
text("MODES UNLOCKED: "+wins,10,80);
botPaddle.y=ball.y;
  drawSprites();
  }


function reset(){
  playerPaddle.destroy();
  botPaddle.destroy();
  ball.destroy();
  score=0;
  if(keyDown("F")){
    window.location.reload();
  } 
}
