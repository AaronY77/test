var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_green=createButton("green");
  btn_green.position(100,50);
  btn_red=createButton("red");
  btn_red.position(250,50);
 

}
  

function draw() {
  background("black");

/*if(mousePressed(btn_green)){
  background("green");
  
}
if(mousePressed(btn_red)){
  background("red")
}*/
btn_red.mousePressed(red_bg);
btn_green.mousePressed(green_bg);
drawSprites();
 
}

  

function red_bg(){
  r=255;
  g=0;
  b=0;
  background(r,g,b);
}
{
  function green_bg(){
    r=0;
    g=255;
    b=0;
    background(r,g,b);
  }

}

