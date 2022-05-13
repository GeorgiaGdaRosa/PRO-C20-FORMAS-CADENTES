
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane
var block1



function preload()
{

}

function setup() {
	createCanvas(500, 500);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options ={
		isStatic: true
	}	

	var block1_options={
		restituion: 0.5,
		friction : 0.95,
		frictionAir : 0
	}

	var block2_options={
		restituion: 0.7,
		friction :0.01,
		frictionAir : 0.1
	}

	var block3_options={
		restituion: 0.01,
		friction : 1,
		frictionAir : 0.3
	}

	plane= Bodies.rectangle(200,500,400,50,plane_options)
	World.add(world,plane)
	Engine.run(engine);
  
	block1 = Bodies.circle(220,10,25,block1_options)
	World.add(world,block1)
	

	block2 = Bodies.rectangle(110,50,50,50,block2_options)
	World.add(world,block2)

	block3 = Bodies.rectangle(350,50,50,50,block3_options)
	World.add(world,block3)

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  fill("red")
  rect(plane.position.x,plane.position.y,400,50)
  ellipse(block1.position.x,block1.position.y,50)
  rect(block2.position.x, block2.position.y, 50,50)
  rect(block3.position.x, block3.position.y, 50,50)

  drawSprites();
 
}



