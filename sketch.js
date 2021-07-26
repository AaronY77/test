var track;var trackIMG;var runnerImg; var runner;var leftEdge;var rightEdge;
function preload(){
 trackIMG=loadImage("path.png");
 runnerIMG=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200);
  track.addImage(trackIMG);
  track.velocityY=4;
  track.scale=1.2;
  runner=createSprite(200,200);
  runner.addAnimation("moving",runnerIMG);
  runner.scale=0.05;
  rightEdge=createSprite(300);
  leftEdge=createSprite(100);
  leftEdge.visible=false;
  rightEdge.visible=false;
  




}

function draw() {
  background("white");
  drawSprites();
  if(track.y>400){
    track.y=20;
  }
  runner.x=World.mouseX;
  runner.collide(leftEdge);
  runner.collide(rightEdge);

}
