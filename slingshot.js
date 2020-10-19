class Slingshot{

    constructor(bodyA,pointB){
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.5
    }
    this.slingshot=Constraint.create(options);
    World.add(world,this.slingshot);
}
    fly(){
     this.slingshot.bodyA=null
    }
    
    display(){
        if(this.slingshot.bodyA){
    var posA=this.slingshot.bodyA.position
    var posB=this.pointB    
    strokeWeight(5);
    line(posA.x,posA.y,posB)
        }

    }
    






};