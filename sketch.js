var score=0
var obstacleGroup
function preload()
{

  bgimg=loadImage("images/bg.jpg")
  ironman=loadImage("images/iron.png")
  stoneimage=loadImage("images/stone.png")
  diamondImage = loadImage("images/diamond.png");
  spikesimg=loadImage("images/spikes.png");
}
  
  function setup()
   {
  createCanvas(1000, 600);
  bg=createSprite(500,300);
  bg.addImage(bgimg)
  bg.scale=2
  bg.velocityX=-5
  ironMan=createSprite(100,430);
  ironMan.addImage(ironman)
  ironMan.scale=0.25;
  stoneGroup=new Group
  diamondGroup = new Group
  obstacleGroup=new Group
  }
  
  function draw()
  {
  background("lightblue")
  drawSprites()
  if(bg.x<240)
  {
      bg.x=500
  }
  if(keyDown("up"))
  {
    ironMan.velocityY=-10
  }
  if(keyDown("left"))
  {
    ironMan.x=ironMan.x-5
  }
  if(keyDown("right"))
  {
    ironMan.x=ironMan.x+5
  }
    ironMan.velocityY=ironMan.velocityY+0.5;
    generateStone()
    generateDiamond()
    generateObstacles()
  
    ironMan.debug=true;
    ironMan.setCollider("rectangle",100,0,200,400)

    for(var i=0; i<stoneGroup.length; i++)
    {
      var temp= stoneGroup.get(i);
      if(temp.isTouching(ironMan))
      {
        ironMan.collide(temp);
      }
    }

    for(i=0;i<diamondGroup.length;i++)
    {
        var tem=diamondGroup.get(i);
        if(tem.isTouching(ironMan))
        {
          score++
          tem.destroy()
        }
    }
    // displaying score
      fill("white")
      textSize(50)
      text(" Score "+score,300,100)

      for( i=0;i<obstacleGroup.length;i++)
      {
        var tem=obstacleGroup.get(i);
        if(tem.isTouching(ironMan))
        {
           score=score-5
          
        }
      }
  
  function generateStone()
  {
      if(frameCount%50==0)
      {
        stone=createSprite(1100,random(70,450),45,10)
        stone.velocityX=-5
        stone.velocityY=3
        stone.lifetime=300
        stone.addImage(stoneimage)
        stoneGroup.add(stone);
        stone.scale=0.5
      }
  }

  function generateDiamond()
  {
    if(frameCount%70==0)
    {
      diamond=createSprite(1100,random(150,350),45,10)
      diamond.velocityX=-5
      diamond.lifetime=300
      diamond.addImage(diamondImage)
      diamondGroup.add(diamond);
      diamond.scale=0.5
    }
  }

  function generateObstacles()
  {
  if(frameCount%70==0)
  {
     obstacle=createSprite(900,random(480,45),30,45);
     obstacle.velocityX=-5
     obstacle.velocityY=3
     obstacle.addImage(spikesimg)
    obstacle.scale=0.5
    obstacle.lifetime=300
    obstacleGroup.add(obstacle)
  }
  }

}
