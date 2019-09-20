class Square {
    constructor(width, height, x, y) {
        if (typeof x !== "number")
            throw new TypeError("X must be a number");
        if (typeof y !== "number")
            throw new TypeError("Y must be a number");
        if (typeof width !== "number")
            throw new TypeError("Width must be a number");
        if (typeof height !== "number")
            throw new TypeError("Height must be a number");

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }   

    setPosition(x, y) {
        if (typeof x !== "number")
            throw new TypeError("X must be a number");
        if (typeof y !== "number")
            throw new TypeError("Y must be a number");

        this.x = x;
        this.y = y;
    }

    render(context, color) {
        if (isHex(color))
            context.fillStyle = color;
        else 
            context.fillStyle = "#000";

        context.fillRect(
            this.x - this.width / 2, 
            this.y - this.height / 2,
            this.width, this.height);
    }
}