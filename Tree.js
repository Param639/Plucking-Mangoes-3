class Tree {
    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.width = 100;
        this.height = 250;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world,this.body);
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,954,328,500,550);
    }
}