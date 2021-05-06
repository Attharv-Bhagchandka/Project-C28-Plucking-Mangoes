class launcher {
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
        }
        this.pointB = pointB;
        this.lanch = Constraint.create(options);
        World.add(world, this.launch)
    }

    fly(){
        this.launch.bodyA = null
    }
    attatch(attactchment){
        this.launch.bodyA = attactchment
    }

    display(){
        if(this.launch.bodyA){ 
            var pointA = this.launch.bodyA.position; 
            var pointB = this.pointB; 
            strokeWeight(4); 
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        } 
    }
}