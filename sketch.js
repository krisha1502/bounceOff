
var r1,r2;

function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 100, 50, 100);
  r2=createSprite(400, 300, 100, 50);
  r1.shapeColor="green";
  r2.shapeColor="green";
  r2.velocityY=-3;
  r1.velocityY=3;
  
}

function draw() {
  background(0); 
  bounceoff(r1,r2);
  drawSprites();
}
