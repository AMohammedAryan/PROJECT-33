const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

  var score = 0;
  var particle;

  var turn = 5;

  var displayCriteria;

  var gameState = "start";
 
//var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50){
    
       plinkos.push(new Plinko(j,75));
    }

    for (var l = 50; l <=width-10; l=l+50){
    
       plinkos.push(new Plinko(l,175));
    }

     for (var r = 75; r <=width; r=r+50){
    
       plinkos.push(new Plinko(r,275));
    }

     for (var s = 50; s <=width-10; s=s+50){
    
       plinkos.push(new Plinko(s,375));
    }
 }

function draw() {
  background("black");

  textSize(25);
  text("Score : "+score,20,30);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   displayParticle();

   if(displayCriteria === true){

      console.log(turn);
      //console.log(particle.body.position.y);

      if(particle.body.position.y > 779){

         if(particle.body.position.x < 260){

            particle.body.position.x = 900;
            score = score + 500;
         }

         if(particle.body.position.x > 340 && particle.body.position.x < 580){

            particle.body.position.x = 900;
            score = score + 100;
         }

         if(particle.body.position.x > 420 && particle.body.position.x < 810){

            particle.body.position.x = 900;
            score = score + 200;
         }
      }
   }

   if(turn < 1 && particle.body.position.x > 810){

      gameState = "end";

      textSize(40);
      text("Game Over", 300, 335);
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(gameState !== "end"){

      for(var t = 20; t < width/2 - 90; t = t + 80){

         text(500, t, 550);
      }

      for(var u = 340; u < width-width/4-80; u = u + 80){

         text(100, u, 550);
      }

      for(var b = 580; b < width; b = b + 80){

         text(200, b, 550)
      }
   }

   //function mousePressed(){
     /* if(frameCount%60===0){
         particles.push(new Particle(random(width/2-30, width/2+30), 10));
         score++;
      }*/
   //}
}

function mousePressed(){

   if(gameState === "start"){

      particle = new Particle(mouseX, 10);
      displayCriteria = true;
      turn = turn - 1;

      console.log(displayCriteria);
   }
}

function displayParticle(){

   if(displayCriteria === true){

      particle.display();
   }
}
