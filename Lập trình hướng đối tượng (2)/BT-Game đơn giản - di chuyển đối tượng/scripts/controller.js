(() => {
    const keyState = {};
    const ARROW_LEFT = 37;
    const ARROW_RIGHT = 39;
    const ARROW_DOWN = 40;
    const ARROW_UP = 38;

    window.direction = 0;

    window.addEventListener("keydown", e => {
        keyState[e.keyCode] = true;
    })

    window.addEventListener("keyup", e => {
        keyState[e.keyCode] = false;
    })

    setInterval(() => {
        // Key scan @144Hz
        const GO_UP = Number(keyState[ARROW_UP]) * 8;
        const GO_RIGHT = Number(keyState[ARROW_RIGHT]) * 4;
        const GO_DOWN = Number(keyState[ARROW_DOWN]) * 2;
        const GO_LEFT = Number(keyState[ARROW_LEFT]) * 1;

        /* Store direction in binary form 
         * | 0/1 |  | 0/1 |  | 0/1 |  | 0/1 |
         *    ^        ^        ^        ^
         *   UP      RIGHT    DOWN      LEFT
        */

        window.direction = GO_UP | GO_RIGHT | GO_DOWN | GO_LEFT;
    }, 7);
})()
