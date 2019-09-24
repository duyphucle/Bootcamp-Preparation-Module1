class Round {
    constructor(r, x, y) {
        if (typeof r !== "number")
            throw new TypeError("R must be number");
        if (typeof x !== "number")
            throw new TypeError("X must be number");
        if (typeof y !== "number")
            throw new TypeError("Y must be number");

        this.x = x;
        this.y = y;
        this.radius = r;
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
            context.fillStyle = color,
            context.strokeStyle = color;
        else 
            context.fillStyle = "#000",
            context.strokeStyle = "#000";

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.lineWidth = 1;
        context.fill();
        context.stroke();
        context.closePath();
    }
}