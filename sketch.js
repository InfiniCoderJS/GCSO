var car,wall;
var speed,weight;
var deformation


function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(750,200,50,height/2)
  
  wall.depth = 1
  car.depth = wall.depth+1

  wall.shapeColor = color(80,80,80)
  car.shapeColor = "white"

speed = random(55,90)
weight = random(400,1500)

car.velocityX = speed;

deformation = 0.5 * weight * speed * speed/22500




}

function draw() {
  background("black"); 
  
  if(isTouching(car,wall) && (deformation < 100 )){
    car.x = 50
    car.velocityX = 0
    car.shapeColor = color(0,255,0)
  }

  if(isTouching(car,wall) && (deformation >= 100 ) && (deformation < 180)){
    car.x =  50
    car.velocityX = 0
    car.shapeColor = color(230,230,0)
  }

  if(isTouching(car,wall) && (deformation > 180 )){
    car.x = 50
    car.velocityX = 0
    car.shapeColor = color(255,0,0)
  }

  drawSprites();
}