var line1,line2,line3,line4,line5;
var player,bullets;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18;

function setup(){
createCanvas(500,500);

player = createSprite(250,400,20,20);
box1 = createSprite(50,50,10,10);
box2 = createSprite(100,50,10,10);
box3 = createSprite(150,50,10,10);
box4 = createSprite(200,50,10,10);
box5 = createSprite(250,50,10,10);
box6 = createSprite(300,50,10,10);
box7 = createSprite(350,50,10,10);
box8 = createSprite(400,50,10,10);
box9 = createSprite(450,50,10,10);
box10 = createSprite(50,100,10,10);
box11 = createSprite(50,100,10,10);
box12 = createSprite(100,100,10,10);
box13 = createSprite(150,100,10,10);
box14 = createSprite(200,100,10,10);
box15 = createSprite(250,100,10,10);
box16 = createSprite(300,100,10,10);
box17 = createSprite(350,100,10,10);
box18 = createSprite(400,100,10,10);
box19 = createSprite(450,100,10,10);

// for( var i = 50 ; i < 450 ; i = i + 50 ){
//  //line1 = createSprite(i,50,10,10);
// }

// for( var i = 50 ; i < 450 ; i = i + 50 ){
//   line2 = createSprite(i,100,10,10);
//  }

//  for( var i = 50 ; i < 450 ; i = i + 50 ){
//   line3 = createSprite(i,150,10,10);
//  }

//  for( var i = 50 ; i < 450 ; i = i + 50 ){
//   line4 = createSprite(i,200,10,10);
//  }

//  for( var i = 50 ; i < 450 ; i = i + 50 ){
//   line5 = createSprite(i,250,10,10);
//  }

}

function draw(){
background("black");

if(keyDown("space")){
  shooting();
}

if(keyDown("RIGHT_ARROW")){
  player.velocityX = 5;
  player.velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
  player.velocityX = -5;
  player.velocityY = 0;
}



drawSprites();
}

function shooting(){

  bullets = createSprite(250,400,5,5);
  bullets.x = player.x;
  bullets.shapeColor = "lime";
  bullets.velocityY = -8;
  bullets.velocityX = 0;
  
}
