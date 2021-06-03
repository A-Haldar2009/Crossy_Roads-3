var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{

  carImg1=loadAnimation("images/car1.png")

  carImg2=loadAnimation("images/car2.png")

  logImg1=loadAnimation("images/log1.png")

  logImg2=loadAnimation("images/log2.png")

  PlayerImg=loadAnimation("images/Player-03.png")

  cityImg1=loadAnimation("images/city1.png")

  cityImg2=loadAnimation("images/city2.png")

  wallImg=loadAnimation("images/wall.png")
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

 
  
  //Grasses where player can rest
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)//adding road
    {
     var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "green";
  }
  //To create rows of car
   for(var i = 0; i < 40; i++){
     cars = new Car(2);
     carGroup1.add(cars.spt);
   }
  //To create rows of Logs
    for(var i = 0; i < 40; i++){
      log = new Log(-3);
      logGroup1.add(log.spt);
    }

    Player=new player(width/2, height-25)


   
 }

function draw() {
  background("skyblue");
  translate(0, -Player.spt.y+height-150)

  Player.spt.addAnimation("boy", PlayerImg)
  Player.spt.scale=0.07


  if (carGroup1.isTouching(Player.spt)){

     Player.spt.x=width/2

     Player.spt.y=height-75

  }



  if (logGroup1.isTouching(Player.spt)){

    Player.spt.x= Player.spt.x-3

  }else if ((Player.spt.y>height-1550 && Player.spt.y<height-1300) || (Player.spt.y<height-500 && Player.spt.y>height-850) || (Player.spt.y>height) || (Player.spt.x<0) || (Player.spt.x>width)){

  Player.spt.x=width/2
  Player.spt.y=height-75

  }
 
  //Making the cars re-apper
  for(i=1;i<carGroup1.length;i++) {
    if(carGroup1[i].x>width)
    {
     carGroup1[i].x=0;
    }
    if(carGroup1[i].x<0)
    {
      carGroup1[i].x=width;
    }
  }

  //making the logs reapper
  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0)
    {
    logGroup1[i].x=width;
    }
  }

  drawSprites();
}


function keyPressed(){

if (keyCode==UP_ARROW){

Player.move(0, -2)
  
}else if (keyCode==DOWN_ARROW){

Player.move(0, 2)

}else if (keyCode==LEFT_ARROW){

Player.move(-2, 0)

}else if (keyCode==RIGHT_ARROW){

Player.move(2, 0)

}



}
