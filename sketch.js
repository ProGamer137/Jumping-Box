const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var bird;
var pig;
var lohg1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(820,300,70,70);
    pig1 = new Pig(900,300);
    box2 = new Box(980,300,70,70);
    log1 = new Log(900,250,300,PI/2)
    box3= new Box(820,200,70,70)
    pig2 = new Pig(900,200)
    box4= new Box(980,200,70,70)
    log2= new Log(900,150,300,PI/2)
    log3= new Log(980,70,150,-PI/7)
    log4=new Log(860,70,150,PI/7)
    box5 = new Box(900,100,70,70)

    ground = new Ground(600,height,1200,20)
    bird = new Bird(300,200)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    bird.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();
}