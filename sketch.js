var car,wall;
var speed,weight;
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90)
  weight = (400,1500)
  deformation = 0.5*weight*speed*speed/22500
}

function draw() {
  background(255,255,255);  
  
  car.velocityX = speed;
  console.log(deformation)


  if(car.collide(wall)){
    speed = 0   
    

  if (deformation > 100){
   car.shaprColor=color(255,0,0)
  }
 if (deformation<180 && deformation>100){}
 car.shaprColor=color(230,230,230)
  }
  if (deformation<100){

    car.shaprColor=color(0,255,0)

  }

  drawSprites();
}