var tom,jerry,garden,tomImg,jerryImg,gardenImg,tomImg2,jerryImg2,tomImg3,jerryImg3;
function preload() {
    //load the images here
gardenImg = loadImage("images/garden.png");
tomImg = loadAnimation("images/cat1.png");
jerryImg = loadAnimation("images/mouse1.png");

tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");

tomImg3 = loadAnimation("images/cat4.png");
jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400);
    garden.addImage(gardenImg);

    //create tom and jerry sprites here
    tom = createSprite(800,620,10,10); 
    tom.addAnimation("tom",tomImg);
    tom.scale = 0.15;
  

    jerry = createSprite(200,620,10,10); 
    jerry.addAnimation("jerry",jerryImg);
    jerry.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < (tom.width/2 - jerry.width/2)+40){
    tom.velocityX = 0;
    jerry.x = 200;
    tom.x = 270;
jerry.addAnimation("jerry",jerryImg3);
tom.addAnimation("tom",tomImg3);
}

keyPressed();
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyDown("left_arrow")){
tom.velocityX = -2;
tom.addAnimation("tom",tomImg2);
jerry.addAnimation("jerry",jerryImg2);

}

  


}
