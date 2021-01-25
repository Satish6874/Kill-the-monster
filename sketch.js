const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,hero,bg,rope;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26;

function preload() {
//preload the images here
bg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

 hero = new Hero(250,300,300);
  rope = new Fly(hero.body,{x:250,y:50});

  ground = new Ground(410,400,800,20);

  block1 = new Block(650,380,40,40);
  block2 = new Block(650,340,40,40);
  block3 = new Block(650,300,40,40);
  block4 = new Block(650,260,40,40);
  block5 = new Block(650,220,40,40);

  block6 = new Block(600,380,40,40);
  block7 = new Block(600,340,40,40);
  block8 = new Block(600,300,40,40);
  block9 = new Block(600,260,40,40);
  block10 = new Block(600,220,40,40);
  block11 = new Block(600,180,40,40);

  block12 = new Block(550,380,40,40);
  block13 = new Block(550,340,40,40);
  block14 = new Block(550,300,40,40);
  block15 = new Block(550,260,40,40);
  block16 = new Block(550,220,40,40);
  block17 = new Block(550,280,40,40);
  block18 = new Block(550,140,40,40);

  block19 = new Block(500,380,40,40);
  block20 = new Block(500,340,40,40);
  block21 = new Block(500,300,40,40);
  block22 = new Block(500,260,40,40);
  block23 = new Block(500,220,40,40);
  block24 = new Block(500,180,40,40);
  block25 = new Block(500,140,40,40);
  block26 = new Block(500,100,40,40);

Engine.run(engine);

}

function draw() {
  background(bg);

  ground.display();
  rope.display();
  hero.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
 
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

}
function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x:mouseX,y:mouseY});
}

