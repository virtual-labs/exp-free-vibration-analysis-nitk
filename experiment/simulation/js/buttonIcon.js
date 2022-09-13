class Button {
    constructor(x, y, img)  {
        this.x = x;
        this.y = y;
        this.icon = img;
    }

    in(x, y)    {
        if (x > this.x && y > this.y && x < this.x+this.icon.width && y < this.y+this.icon.height)  {
            return true;
        }
        else {
            return false;
        }
    }

    draw()  {
        image(this.icon, this.x, this.y);
        // if
        // cursor('not-allowed')
    }
}
