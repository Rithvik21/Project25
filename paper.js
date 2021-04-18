class Paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:.3,
            friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y, r , options);
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r*3,this.r*3);
			pop()
			
	}

}