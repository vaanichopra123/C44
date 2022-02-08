
function preload(){
  bgImage = loadImage("./images/bg.jpg");
  earthImage = loadImage ("./images/earth.png");
  moonImage = loadImage ("./images/moon.png");
  spacecraftImage = loadImage ("./images/spacecraft.png");
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites();

  spaceCraft = createSprite(150,200);
  spaceCraft.addImage("spcImg", spacecraftImage);
  spaceCraft.scale = 2.2;
  //spaceCraft.positionY = World.mouseY;

  earth = createSprite(windowWidth - 420, windowHeight - 370);
  earth.addImage("earthImg", earthImage);
  earth.scale = 0.7;

  moon = createSprite(windowWidth - 620, windowHeight - 530);
  moon.addImage("moonImg", moonImage);
  moon.scale = 0.5;

  bullet = createSprite ( spaceCraft.x,spaceCraft.y,50,50);


}

function draw() 
{
background(bgImage);

spaceCraft.bounceOff(edges);
spaceCraft.y = World.mouseY;
spaceCraft.setCollider("circle", 0,0,20);
spaceCraft.debug = true;

if (keyDown("space")){
  bullet.velocityX = random(20,40);
  bullet.velocityY = random(10,20);
}
bullet.bounceOff(edges);
//bullet.lifeTime = 

drawSprites();
}

// crop bg, spacecraft
// rotating moon
//rand num
//infinite ground
