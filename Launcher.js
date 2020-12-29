class Launcher{
    constructor(bodyA, B){
        var options = {
            bodyA: bodyA,
            pointB: B,
            stiffness: 0.001,
            length: 40
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        strokeWeight(4);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y);
        }
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA = body
    }
}