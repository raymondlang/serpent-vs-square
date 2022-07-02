const keyCodes = {
  left: [-3, 0],
  right: [3, 0]
};

// console.log(pauseButton);
const pauseButton = document.getElementById("pausebtn");

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.serpent = this.game.addSerpent();
    this.keys = Object.create(null);
    // window.addEventListener('keydown', this.bindKeyHandlers);
    this.gameStarted = false;
    // console.log(pauseButton);
    this.paused = false;
    this.time = false;

    pauseButton.addEventListener('click', this.togglePlay.bind(this));

    this.togglePlay = this.togglePlay.bind(this);

    // this.game.addBlocks();
    // this.game.addCircles();
    // this.game.addLines();
    window.addEventListener('keyup', this.resetSerp.bind(this));
    this.resetSerp = this.resetSerp.bind(this);

  }
