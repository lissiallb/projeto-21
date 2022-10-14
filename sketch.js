
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1;
var ground2;
var ground3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ballo =
	{
		isStatic : false,
		density : 1.2,
        friction : 0,
		restitution : 0.3
	}
	ball = Bodies.circle(200, 200, 50, ballo);
	World.add(ball);

	ground1 = new Ground(width/2, 670, width, 20);
	ground2 = new Ground(1100, 600, 20, 120);
	ground3 = new Ground(1600, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  keyPressed();
  
  ellipse(ball.position.x, ball.position.y, 50, 50);
  ground.display();
  drawSprites();
 
}

function keyPressed() 
{
   if (keycode === UP_ARROW)
   {
	Matter.Body.applyForce(ball, 200, 200, {x: 4}, {y: 5});
   }
}

