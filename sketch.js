
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var box
var engine,world
var paper1
//var paperimg

//function preload(){
//paperimg=loadImage("")

//}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


    box = new DustbinClass (-500,100,300,400)
    paper1 = new paperClass(500,200,30,30)
	
	
	
	groundSprite=createSprite(width/2, height-15, width,30);
	groundSprite.shapeColor=color(48,22,22)
	ground = Bodies.rectangle(width/2, 670, width, 30 , {isStatic:true} );
	
	
	World.add(world, ground);
    Engine.run(engine);
  
	
}

function KeyPressed(){
 
	if (keyCode === UP_ARROW )
  Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85})

}


function draw() {
 // rectMode(CENTER);
  background(0);
  box.display();
   paper1.display();
  drawSprites();
 
}



