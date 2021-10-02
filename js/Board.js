class Board
{
    constructor(x,y,w,h)
    {
        this.w = w;
        this.h = h;
        var options = {
            isStatic:true,
        };
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage('./assets/board.png');
        World.add(world,this.body);
    }

    display()
    {
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h)
        pop();
    }
    
}