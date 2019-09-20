(function () {
    const cv = document.getElementById("game");
    const cx = cv.getContext("2d");
    const mid = {
      x: 315,
      y: 180
    };
    const start = new Date().getTime();
    const clear = () => {
      cx.fillStyle = "#fff";
      cx.fillRect(0, 0, 640, 480);
    };
    const calculate = (phi, r, f) => {
      var t = (new Date().getTime() - start) / 1000;    
      var x = r * Math.cos(2 * Math.PI * f * t + phi);
      var y = r * Math.sin(2 * Math.PI * f * t + phi);
      return { x: x, y: y };
    };
    const drawSqr = cor => {
      cx.fillStyle = "#000";
      cx.fillRect(cor.x + mid.x, cor.y + mid.y, 10, 10);
    };
    const drawRnd = (cor, r) => {
      cx.beginPath();
      cx.arc(cor.x + mid.x, cor.y + mid.y, r, 0, 2 * Math.PI, false);
      cx.fillStyle = "#000";
      cx.fill();
     
      cx.closePath();
    };
    
    (function a() {
      requestAnimationFrame(a);
      clear();
      drawGame();
     
      // var ag = Math.PI / 2;
      // for (var i = 0; i < 4; ++i)
      //   drawRnd(calculate(ag * i, 125, .3), 7);
     
      var ag = Math.PI / 2;
      for (var i = 0; i < 4; ++i)
        drawRnd(calculate(ag * i, 260, .3), 7);
     
      var ag = Math.PI / 2;
      for (var i = 0; i < 4; ++i)
        drawRnd(calculate(ag * i, 195, .3), 7);
     
      var ag = Math.PI / 2;
      for (var i = 0; i < 4; ++i)
        drawRnd(calculate(ag * i, 130, .3), 7);
     
      var ag = Math.PI / 2;
      for (var i = 0; i < 4; ++i)
        drawRnd(calculate(ag * i, 65, .3), 7);
     
     
    })()
  })()