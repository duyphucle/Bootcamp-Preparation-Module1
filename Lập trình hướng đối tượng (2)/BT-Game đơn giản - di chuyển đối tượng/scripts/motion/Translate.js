class TranslateMotion {
    constructor(o, x, y, b, t, f, a) {
        if (typeof x !== "number")
            throw new TypeError("X must be a number");
        if (typeof y !== "number")
            throw new TypeError("Y must be a number");
        if (typeof b !== "number")
            throw new TypeError("B must be a number");
        if (typeof t !== "number")
            t = new Date().getTime();
        if (typeof f !== "number")
            f = .2;
        if (typeof a !== "number")
            a = 0;

        if (!(o instanceof Round) &&
            !(o instanceof Triangle) &&
            !(o instanceof Square))
            throw new TypeError("Undefined Shape");

        this.shape = o;
        this.mid = {
            x: x,
            y: y
        };
        this.border = b;
        this.startTime = t;
        this.frequency = f;
        this.angle = {
            tan: Math.tan(a),
            cos: Math.cos(a),
            sin: Math.sin(a)
        };
    }

    render(context, color) {
        const deltaTime = new Date().getTime() - this.startTime;
        const current = {};
        current.x = this.border * Math.cos(2 * Math.PI * this.frequency * deltaTime / 1000);
        current.y = this.angle.tan * this.angle.cos * current.x;
        current.x = this.mid.x - current.x * this.angle.cos;
        current.y = this.mid.y - current.y * this.angle.sin;

        this.shape.setPosition(current.x, current.y);
        this.shape.render(context, color);
    }
}