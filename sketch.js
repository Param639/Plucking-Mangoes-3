
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,boyImage;
var ground;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var launcher;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,10);

	stone = new Stone(90,450,40);
	
	tree = new Tree(600,300);
	
	mango1 = new Mango(900,200,60);
	mango2 = new Mango(950,120,50);
	mango3 = new Mango(980,178,42);
	mango4 = new Mango(875,300,55);
	mango5 = new Mango(1000,275,60);
	mango6 = new Mango(1050,200,58);
	mango7 = new Mango(800,250,48);
	mango8 = new Mango(1140,250,52);
	mango9 = new Mango(900,120,59);
  mango10 = new Mango(1000,160,50);
  mango11 = new Mango(950,230,65);
  mango12 = new Mango(1080,270,49);
  
    launcher = new Launcher(stone.body,{x:200,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  strokeWeight(4);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  image(boyImage,300,510,300,310);
  launcher.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
}

function detectCollision(lmango,lstone){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<lmango.r+lstone.r){
		Matter.Body.setStatic(lstone.body,false)
	}
}

function mouseDragged(){
    stone.body.position.x=mouseX;
    stone.body.position.y=mouseY;
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		launcher.attach(stone.body);
	  }
  }