var car,wall,speed,weight,deformation;
function setup() {
  canvas=createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 30);
  wall=createSprite(1000, 200, 60, 200);
  wall.shapeColor="grey";
  car.velocityX=speed;
 
}

function draw() {
  background(255,255,255); 
 
  if(wall.x-car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    console.log(speed);
    console.log(weight);
    console.log(deformation);
    if(deformation<100)
    {
      car.shapeColor="green";
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor="yellow";
    }
     if(deformation>180)
    {
      car.shapeColor="red";
    }
    
  }
  drawSprites();
}