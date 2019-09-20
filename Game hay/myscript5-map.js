var ctx = null;
        var gameMap = [
           1,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,1,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
           1,3,2,3,2,3,2,3,2,3,2,3,2,3,0,3,0,
           0,0,3,0,0,0,0,0,0,0,0,0,0,2,0,2,0,
           0,0,2,0,2,3,2,3,2,3,2,1,0,3,0,3,0,
           0,0,3,0,3,0,3,2,3,2,3,1,0,2,0,2,0,
           0,0,2,0,2,0,0,0,0,0,0,0,0,3,0,3,0,
           0,0,3,0,3,2,3,2,3,2,3,2,3,2,0,2,0,
           0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,3,0,
           0,0,3,2,3,2,3,2,3,2,3,2,3,2,3,2,0
      ];
        var tileW = 35, tileH = 35;
        var mapW = 17, mapH = 10;
        window.onload = function () {
            ctx = document.getElementById('game').getContext("2d");
            // requestAnimationFrame(drawGame);
        };
        function drawGame() {
            if (ctx == null) { return; }
            for (var y = 0; y < mapH; ++y) {
                for (var x = 0; x < mapW; ++x) {
                    switch (gameMap[((y * mapW) + x)]) {
                        case 1:
                            ctx.fillStyle = "#33ff33";
                            break;
                        case 3:
                            ctx.fillStyle = "#c2d6d6";
                            break;
                        case 2:
                            ctx.fillStyle = "#ffffff";
                            break;
                        default:
                            ctx.fillStyle = "#b3f0ff";
                    }
                    ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
                }
            }
            ctx.fillStyle = "red";
            // draw()
            // requestAnimationFrame(drawGame);
        }  
         

        // drawGame();