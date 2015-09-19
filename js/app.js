var Cart = {
  offset: 5,
  posX: null,
  moving: 0,
  init: function(x) {
    this.posX = x;
  },
  move: function(offset) {
    this.posX += offset;
    // TODO: make sure this doesn't go out of bounds
  }
}

var Controller = {
  fps: 25,
  then: Date.now(),
  gameInterval: null,
  init: function() {
    View.init();
    Controller.initGameLoop();
  },
  update: function() {

  },
  initGameLoop: function() {
    Controller.playing = true;
    this.gameInterval = setInterval(function() {
      Controller.gameLoop()
    }, 1000 / Controller.fps);
  },
  gameLoop: function() {
    var now = Date.now();
    var delta = (now - Controller.then) / 1000;
    View.clear()
    Controller.update(delta);
    View.render();
    Controller.then = now;
  },
  addCanvasEventListener: function(canvas) {
    // canvas.addEventListener('mousemove', function(e) {
    //   Controller.mousePos = Controller.getMousePos(canvas, e);
    // }, false);
    // canvas.addEventListener('mousedown', function() {
    //   Hero.fire();
    // }, false);
    window.addEventListener("keydown", Controller.checkKeyDown, false);
    window.addEventListener("keyup", Controller.checkKeyUp, false);
  },
  checkKeyDown: function(e) {
    switch(e.keyCode) {
      case 37: // Move cart left
        Cart.moving = -1;
        break;
      case 39: // Move cart right
        Cart.moving = 1;
        break;
    };
  },
  checkKeyUp: function(e) {
    switch (e.keyCode) {
      case 37:
        Cart.moving = 0;
        break;
      case 39:
        Cart.moving = 0;
        break;
    }
  }
};

var View = {
  gameWidth: 800,
  gameHeight: 600,

  init: function() {
    View.canvas = document.getElementById("frame");
    View.ctx = View.canvas.getContext("2d");
    View.canvas.width = this.gameWidth;
    View.canvas.height = this.gameHeight;
    Controller.addCanvasEventListener(View.canvas);
  },
  render: function() {

  }
}
