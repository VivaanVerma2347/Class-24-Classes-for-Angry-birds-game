class Pig{
    constructor(x,y){
       var Pig_options ={
           restitution: 1.0,
           friction:0.3,
           density:1.0
       }
   
       this.body = Bodies.rectangle(x,y,50,50,Pig_options);
       World.add(world,this.body);
       this.width=50;
       this.height=50;   
    }   
   
   display(){
       var angle=this.body.angle;
       push();
       translate (this.body.position.x,this.body.position.y);
       rotate(angle)
       rectMode(CENTER);
       strokeWeight(4);
       stroke("green");
       fill ("yellow");
       rect(0,0,this.width,this.height);
       pop();
   }
   
   }
   