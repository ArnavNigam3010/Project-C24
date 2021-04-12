class Iron{
    constructor(x,y,width,height,r){ 
		var options = {
          restitution : 0.3,
		  friction : 0.5,
		  density : 1
          
	    }
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
        this.r = r;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle);
			strokeWeight(4);
			stroke("black");
			fill("red");
			ellipseMode(RADIUS);
			ellipse(0,0,this.width,this.height)
			//draw the ellipse here to display the rubber ball

			pop()
	}
}