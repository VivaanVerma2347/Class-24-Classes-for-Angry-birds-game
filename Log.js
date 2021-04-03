class Log{
    constructor(x,y,height,angleP){
       var Log_options ={
           restitution: 1.0,
           friction:3.0,
           density:1.0
       }
   
       this.body = Bodies.rectangle(x,y,20,height,Log_options);
       Matter.Body.setAngle(this.body,angleP);
       World.add(world,this.body);
       this.width=20;
       this.height=height;   
    }   
   
   display(){
       var angle=this.body.angle;
       push();
       translate (this.body.position.x,this.body.position.y);
       rotate(angle)
       rectMode(CENTER);
       strokeWeight(4);
       stroke("pink");
       fill ("grey");
       rect(0,0,this.width,this.height);
       pop();
   }
   
   }
   