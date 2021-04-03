class Bird{
    constructor(x,y){
       var Bird_options ={
           restitution: 1.0,
           friction:0.3,
           density:1.0
       }
   
       this.body = Bodies.rectangle(x,y,50,50,Bird_options);
       World.add(world,this.body);
       this.width=50;
       this.height=50;   
    }   
   
   display(){
       var angle=this.body.angle;
       this.body.position.x=mouseX;
       this.body.position.y=mouseY;
       push();
       translate (this.body.position.x,this.body.position.y);
       rotate(angle)
       rectMode(CENTER);
       strokeWeight(4);
       stroke("turquoise");
       fill ("black");
       rect(0,0,this.width,this.height);
       pop();
   }
   
   }
   