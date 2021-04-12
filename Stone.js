class Stone{
    constructor(x,y,width, height){ 
		var options = {
          restitution : 0.8,
		  friction : 0.9,
		  density : 12
          
	    }
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, width, height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.width,this.height)
			
			pop()
	}
}