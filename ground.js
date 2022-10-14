class Ground
{
    constructor(x, y, w, h)
    {
        let groundo = 
        {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, groundo);
        World.add(world, this.body);
    }

    display()
    {
        push();
        rectMode(CENTER);
        fill("lightblue");
        rect(this.x, this.y, this.w, this.h);
        pop();

    }
}