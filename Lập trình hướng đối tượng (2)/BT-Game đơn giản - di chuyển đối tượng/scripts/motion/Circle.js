class CircleMotion {
    constructor(o, x, y, r, t, f, p) {
        if (typeof x !== "number")
            throw new TypeError("X must be a number");
        if (typeof y !== "number")
            throw new TypeError("Y must be a number");
        if (typeof r !== "number")
            throw new TypeError("R must be a number");
        if (typeof t !== "number")
            t = new Date().getTime();
        if (typeof f !== "number")
            f = .2;
        if (typeof p !== "number")
            p = 0;

        if (!(o instanceof Round) &&
            !(o instanceof Triangle) &&
            !(o instanceof Square))
            throw new TypeError("Undefined Shape");

        this.mid = {
            x: x,
            y: y
        };
        this.border = r;
        this.startTime = t;
        this.shape = o;
        this.frequency = f;
        this.startAngle = p;
    }

    render(context, color) {
        const deltaTime = new Date().getTime() - this.startTime;
        const current = {
            x: this.mid.x + this.border * Math.cos(2 * Math.PI * this.frequency * deltaTime / 1000 + this.startAngle),
            y: this.mid.y + this.border * Math.sin(2 * Math.PI * this.frequency * deltaTime / 1000 + this.startAngle)
        };

        this.shape.setPosition(current.x, current.y);
        this.shape.render(context, color);
    }
}