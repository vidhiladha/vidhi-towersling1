
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,ground1;





function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    block1 = new Block(360,252,30,40);






}


function draw(){
    if(backgroundImg)
    background(backgroundImg);
    
    Engine.update(engine);

    ground.display();
    block1.display();
      
}










