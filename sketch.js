function setup() {
  createCanvas(1200,800);
  
  box3 = createSprite(500, 50, 50, 80);
  box3.shapeColor = "red";
  box3.debug = true;
  box3.velocityX = -3;
  
  box2= createSprite(800, 650, 50, 80);
  box2.shapeColor = "red";
  box2.debug = true;
  box2.velocityY = 3;
 
  box1 = createSprite(900, 550, 50, 80);
  box1.shapeColor = "red";
  box1.debug = true;
  box1.velocityX = -3;
  
  box = createSprite(800, 350, 50, 80);
  box.shapeColor = "red";
  box.debug = true;
  box.velocityY = 3;
  
  box4 = createSprite(900, 450, 50, 80);
  box4.shapeColor = "red";
  box4.debug = true;
  
 
  box5 = createSprite(400, 500, 50, 80);
  box5.shapeColor = "red";
  box5.debug = true;
  box5.velocityY = 3;
  
  box6 = createSprite(500, 400, 50, 80);
  box6.shapeColor = "red";
  box6.debug = true;
  box6.velocityX = -3;
  
  box7 = createSprite(600, 200, 50, 80);
  box7.shapeColor = "red";
  box7.debug = true;
  

  box8 = createSprite(600, 200, 50, 80);
  box8.shapeColor = "black";
  box8.debug = true;
  box8.velocityY = 5;


}

function draw() {
  background(255,255,255);  
  drawSprites();
}
