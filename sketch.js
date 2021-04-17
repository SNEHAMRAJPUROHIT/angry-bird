const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1
var stick1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
   box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1= new Pig(810,350)
    stick1= new Stick(810,260,300,PI/2)
    box3= new Box(700,240,70,70)
    box4= new Box(920,240,70,70)
    pig2= new Pig(810,220)
    stick2= new Stick(810,180,300,PI/2)
    box5= new Box(810,160,70,70)
    stick3= new Stick(760,120,150,PI/7)
    stick4= new Stick(870,120,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    stick1.display();
    box3.display();
    box4.display();
    pig2.display();
    stick2.display();
    box5.display();
    stick3.display();
    stick4.display();

}