(() => {
    
    const mySquare = new Square(30, 30, 0, 0);

    let map1 = new drawGame()
    var tron1 = new hinhTron(a1, b1, r);
    var tron2 = new hinhTron(a2, b2, r);

    (function a() {
        (requestAnimationFrame || webkitRequestAnimationFrame)(a);
        context.clearRect(0, 0, 1500, 1100);
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        map1.veMap();
        tron2.updatePositon();
        tron1.updatePositon();
        mySquare.setPosition(
            mySquare.x + 
            5 * Number((direction | 4) === direction) - 
            5 * Number((direction | 1) === direction), 
            mySquare.y + 
            5 * Number((direction | 2) === direction) - 
            5 * Number((direction | 8) === direction)
        );
        mySquare.render(context);
    })()
})()