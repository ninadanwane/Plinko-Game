var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var leftWall, rightWall;
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  leftWall = new Divisions(0, 400, 10, 800);
  rightWall = new Divisions(800, 400, 10, 800);

  //create 1st row of plinko objects
  for (var j = 75; j <=750; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=750; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  if (keyCode === 32)
  {
    particles.push(new Particle(400, 700))
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  leftWall.display();
  rightWall.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //display the particles
  if(keyCode === 32 && frameCount%8 === 0)
  {
    particles.push(new Particle(random(width/2-380,width/2+380),10,10));
  }

for(var f = 0; f <= particles.length-1; f=f+1)
  {
    particles[f].display();
  }
}