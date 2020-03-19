var movingRect;
var fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(200,100,50,40);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(255,255,255);  

  bounceOff(movingRect,fixedRect);


   drawSprites();
}

