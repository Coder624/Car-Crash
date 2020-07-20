function setup() {
  createCanvas(800,400);
 moving = createSprite(400, 200, 50, 50);
 fixed = createSprite(200,200,15,20)
 gameState="apart"

}

function draw() {
  background(165,155,205);  
  drawSprites();
  moving.x=mouseX
  moving.y=mouseY
  //if(192.5<moving.x<207.5&&190<moving.y<210){
//gameState="touching"
//moving.shapeColor=
 // }
  console.log(gameState)
if(moving.x-fixed.x<fixed.width/2+moving.width/2&&moving.y-fixed.y<fixed.height/2+moving.height/2&&fixed.x-moving.x<moving.width/2+fixed.width/2&&fixed.y-moving.y<moving.height/2+fixed.height/2){
 moving.shapeColor="red"
}
else{
  moving.shapeColor="grey"
  gameState="apart"
}
}