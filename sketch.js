const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    r1 = new Rubber(800, 100, 50, 50);
    s1 = new Stone(400,100,100,100);  

    i1 = new Iron(100,100,7,7,7);
    i2 = new Iron(107,100,7,7,7);
    i3 = new Iron(114,100,7,7,7);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    r1.display();
    s1.display();
    i1.display();
    i2.display();
    i3.display();
}