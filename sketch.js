var boy, boyImage, zombies, arrow, arrowImage;




function preload() {
  boyImage = loadImage("boy.png");
  arrowImage = loadImage("arrow.png")






}

function setup() {
  createCanvas(1200, windowHeight);
  boy = createSprite(200, 340, 200, 300);
  boy.addImage(boyImage)
  boy.scale = 0.3




}

function draw() {
  background(230);



 
    

  
  drawSprites();

}


function spawnArrow() {
  push()

  arrow = createSprite(boy.x, boy.y - 70, 60, 30);
  arrow.rotation = -9
  arrow.addImage(arrowImage);
  arrow.velocityX = +4
  arrow.scale = 0.4
  arrow.setCollider("rectangle", 0, 0, arrow.width, 10)
  pop()



}
function keyReleased (){
   
  if( keyCode === 32){

   spawnArrow()
   

  }


}
