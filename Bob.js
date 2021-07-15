class Bob
{
    constructor(x,y,radius)
    {
        var options = {
            isStatic : false,
            restitution :0.3,
            friction:0.5,
            density : 1.2

        }
        this.radius=radius;
        this.body= Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
      
    }
    display()
    {
        var pos=this.body.position;
        push();
        fill("green")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}
function keyPressed(){
    if(keyCode===UP_ARROW){
      Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50,y:-30})
    }
  }