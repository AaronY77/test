var block;
function setup() {
  createCanvas(400,400);
  block=createSprite(20,20);
  //brick=createSprite(200,200,300,300);
}

function draw() 
{

  background(30);
  block.shapeColor="red";
drawSprites();
//brick.shapeColor='green';
if(keyDown("up")){
  block.y-=10;
}
if(keyDown("down")){
  block.y+=10;
}
if(keyDown("right")){
  block.x+=10;
}

if(keyDown("left")){
  block.x-=10;
}
}








