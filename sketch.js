
function setup() {
  createCanvas(400,400);
  box = createSprite(300,150,23,7)
}

function draw() 
{
  background("lightblue");
  if (keyIsDown(RIGHT_ARROW)){
    box.x = box.x+3
  }
drawSprites()
}




