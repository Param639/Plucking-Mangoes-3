class Stone {
    constructor(x,y,r){
        var options ={
            isStatic :false,
            'restitution' :0,
            'friction' :1,
            'density' :1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
    }
    display()
    {
            //this.stone.position.x = mouseX;
            //this.stone.position.y = mouseY;
            var pos=this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER)
            strokeWeight(5);
            fill(255);
            image(this.image,0,0,this.r,this.r);
            pop();
    }
}