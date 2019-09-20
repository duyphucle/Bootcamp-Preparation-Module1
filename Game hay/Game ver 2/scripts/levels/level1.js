function Level1() {
    const map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    const config = {
        disabled: "#aeaeae",
        enabled: "#fff",
        tileSize: 40
    };
    const player = {
        component: new Square(30, 30, 0, 0),
        color: "#f00",
        logicPosition: {
            x: 20,
            y: 420
        }
    };
    const obstacles = {
        objects: [],
        color: "#00f"
    };
    
    this.render = context => {
        for (var row = 0; row < map.length; ++row) {
            for (var col = 0; col < map[row].length; ++col) {
                switch (map[row][col]) {
                    case 0:
                        context.fillStyle = config.enabled;
                        break;

                    case 1:
                        context.fillStyle = config.disabled;
                        break;

                    default:
                        throw new TypeError("Invalid map");
                }
                
                context.fillRect(col * config.tileSize, row * config.tileSize, config.tileSize, config.tileSize);
            }
        }

        player.component.setPosition(
            player.logicPosition.x, 
            player.logicPosition.y
        );
        player.component.render(context, player.color);
        obstacles.objects.forEach(obstacle => obstacle.render(context, obstacles.color));
    }
}