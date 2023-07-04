let ground;
let nave;
var nave_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;
var fundoMovimento;

function preload()
{
  nave_img = loadImage("espacoNave.png");
  bg_img = loadImage("bg_sur.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight );
  frameRate(80);

  fundoMovimento = createSprite(width/2 - 50, height-200, width, height);
  fundoMovimento.addImage("background", bg_img);
  fundoMovimento.x = fundoMovimento.width;

  nave = createSprite(windowWidth/2 - 600,windowHeight-300,30,30);
  nave.addImage(nave_img);
  nave.scale = 0.5;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  push()
  fill(255);
  text("Velocidade Vertical: "+round(vy),800,75);
  pop();

  fundoMovimento.velocityXm= -4;

  if(fundoMovimento.x < 400){
    fundoMovimento.x = fundoMovimento.width;

  }

  //descida
      if(keyIsDown("LEFT_ARROW")){
        nave.velocity.x -=5
      }
      nave.position.y = nave.position.y + vy

      if(keyIsDown("RIGHT_ARROW")){
        nave.position.x +=5
      }
      nave.position.y = nave.position.y + vy

  drawSprites();
}


