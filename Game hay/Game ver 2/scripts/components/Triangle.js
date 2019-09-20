class Triangle {
    constructor(d, x, y) {
        if (typeof d !== "number")
            throw new TypeError("D must be a number");
        if (typeof x !== "number")
            throw new TypeError("X must be a number");
        if (typeof y !== "number")
            throw new TypeError("Y must be a number");

        this.d = d;
        this.x = x;
        this.y = y;
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

        const v = [
            {
                x: this.x,
                y: this.y - this.d
            },
            {
                x: this.x - 0.866 * this.d,
                y: this.y + 0.5 * this.d
            },
            {
                x: this.x + 0.866 * this.d,
                y: this.y + 0.5 * this.d
            }
        ];

        context.beginPath();
        context.moveTo(v[0].x, v[0].y);
        context.lineTo(v[1].x, v[1].y);
        context.lineTo(v[2].x, v[2].y);
        context.closePath();
        context.lineWidth = 1;
        context.stroke();
        context.fill();
    }
}