var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(800,400);

  speed= random(55,90);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(2, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor="black";

  wall=createSprite(700, 200,thickness, height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(rgb(90,130,400));  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
       if(damage>8)
           { wall.shapeColor=rgb(200,10,10)}
       if(damage<8)
           { wall.shapeColor=rgb(10,200,10)}  
   }
 drawSprites();
}

function hasCollided(a,b){
 
  bullet.RightEdge=a.x+a.width;
  wall.LeftEdge=b.x;
  if(bullet.RightEdge>=wall.LeftEdge)
  {return true}
  
  return false;
}