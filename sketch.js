var thickness,wall;

var bullet,speed,weight;

function setup() {

  createCanvas(1600,400);

  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor=color("white");

  thickness=random( 22,83);

  wall=createSprite(1500,200,thickness,height/2);
 

  speed = random(10,40);

  weight = random(30,52);

  bullet.velocityX = speed;

  bullet.debug=true;
  wall.debug=true;
  speed.debug=true;
  weight.debug=true;
}

function draw() {

  background("black"); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2 )
  {


bullet.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

if (damage>10) {
  wall.shapeColor=color("green");
}

if (damage<10 ) {
  wall.shapeColor=("red");
}

  }

  drawSprites(); 

}