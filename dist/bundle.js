/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/serp-v-square.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/block.js":
/*!**********************!*\
  !*** ./lib/block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");
const Util = __webpack_require__(/*! ./util */ "./lib/util.js");

class Block extends MovingObject {
  constructor(options = {}) {
    options.color = 'green';
    // options.pos = [10,5];
    options.radius = 38;
    options.vel = [0, 1];
    super(options);
    this.value = options.val;
    this.color = this.getColor(this.value);
  }

  getColor(value) {
    if (value === 1) {
      return '#69F0AE';
    } else if (value <= 4) {
      return '#00E676';
    } else if (value <= 8) {
      return '#00C853';
    } else if (value <= 12) {
      return '#FFD54F';
    } else if (value <= 16) {
      return '#FFCA28';
    } else if (value <= 20) {
      return '#FF8F00';
    } else if (value >= 21) {
      return '#D84315';
    }
  }

  draw(ctx) {
    Util.drawBlock(ctx, this.pos[0], this.pos[1], 77, this.color);
    if (this.value > 21) {
      Util.drawText(ctx, this.pos[0] - 27, this.pos[1] + 20, 50, 'black', this.value);
    }
    else if (this.value > 9) {
      Util.drawText(ctx, this.pos[0]-23, this.pos[1]+20, 50, 'black', this.value);
    }
    else {
      Util.drawText(ctx, this.pos[0]-13, this.pos[1]+20, 50, 'black', this.value);
    }

  }

}

module.exports = Block;

/***/ }),

/***/ "./lib/circle.js":
/*!***********************!*\
  !*** ./lib/circle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util */ "./lib/util.js");
const MovingObject = __webpack_require__(/*! ./moving_object */ "./lib/moving_object.js");

class Circle extends MovingObject {
  constructor(options = {}) {
    options.color = 'yellow';
    options.pos = options.pos; //|| options.game.randomPos();
    options.radius = 10;
    options.vel = [0, 1];
    super(options);
    this.value = this.randomValue();
  }

  randomValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  draw(ctx) {
    Util.drawText(ctx, this.pos[0], this.pos[1]-15, 12, this.color, this.value);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fill();

    // Util.drawCircle(ctx, this.pos[0], this.pos[1], this.radius, this.color);

  }

}

module.exports = Circle;

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Line = __webpack_require__(/*! ./line */ "./lib/line.js");
const Score = __webpack_require__(/*! ./score */ "./lib/score.js");
const Serpent = __webpack_require__(/*! ./serpent */ "./lib/serpent.js");
const Block = __webpack_require__(/*! ./block */ "./lib/block.js");
const Circle = __webpack_require__(/*! ./circle */ "./lib/circle.js");
const Util = __webpack_require__(/*! ./util */ "./lib/util.js");

class Game {
  constructor() {
    this.circles = [];
    this.blocks = [];
    this.serpents = [];
    this.lines = [];
    this.score = 0;

    // this.addBlocks();
    // this.addCircles();
    // this.addLines();
    this.addBlocks = this.addBlocks.bind(this);
    this.addCircles = this.addCircles.bind(this);
    this.addLines = this.addLines.bind(this);


    // setInterval(this.addBlocks, 4500);
    // setInterval(this.addCircles, 4500);
    // setInterval(this.addLines, 4500);
  }



  addSerpent() {
    const serpent = new Serpent({ pos: [200, 625], game: this });
    this.add(serpent);
    this.serpent = serpent;
    return serpent;
  }

  addBlocks() {
    // debugger

    // console.log("added blocks");
    const margin = 3;
    const blockSize = 78;
    const serpLength = this.serpent ? this.serpent.length : 4;
    for (let i = 0; i < 5; i++) {
      const randVal = Math.floor((Math.random() * serpLength+2) + 1);
      let x;
      if (i === 0 ) {
        x = margin + 40;
      } else {
        x = margin + (blockSize * i) + 40;
      }
      // console.log("right before block add", x);
      this.add(new Block({
        game: this,
        pos: [x, 0],
        val: randVal
      }));
    }



    // const margin = 3;
    // const blockSize = 98;
    // const serpLength = this.serpent ? this.serpent.length : 5;
    // for (let i = 0; i < 4; i++) {
    //   const randVal = Math.floor((Math.random() * serpLength+3) + 1);
    //   let x;
    //   if (i === 0 ) {
    //     x = margin + 50;
    //   } else {
    //     x = margin + (blockSize * i) + 50;
    //   }
    //   this.add(new Block({
    //     game: this,
    //     pos: [x, -1],
    //     val: randVal
    //   }));
    // }
  }

  addCircles() {
    // console.log("added circles");
    const possibleCircs = [40, 90, 140, 170, 185,
      210, 250, 280, 310, 340, 370];
    const possY = [100, 150, 180, 200];
    const randomX = possibleCircs.sort(function () {
      return 0.5 - Math.random();
    });
    const randomY = possY.sort(function () {
      return 0.5 - Math.random();
    });

    const numCircles = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numCircles; i++) {
      // const posX = possibleCircs[Math.floor(Math.random() * possibleCircs.length)];
      // const posX = Math.floor(Math.random() * 250) + 100;
      this.add(new Circle({
        game: this,
        pos: [randomX[i], randomY[i]]
      }));
    }
  }

  // addScore() {
  //   this.add(new Score({game: this}));
  // }

  addLines() {
    // const lines = [];
    // const posY = [42, ]
    // console.log("added lines");
    const possibleLines = [82, 161, 240, 320];
    const random = possibleLines.sort(function () {
      return 0.5 - Math.random();
    });
    const numLines = Math.floor(Math.random() * 4);
    for (let i = 0; i < numLines; i++) {
      // const placeX = possibleLines[Math.floor(Math.random() * possibleLines.length)];

      this.add(new Line({game: this, pos: [random[i], 42]}));
    }

  }

  add(object) {
    if (object instanceof Block) {
      this.blocks.push(object);
    } else if (object instanceof Circle) {
      this.circles.push(object);
    } else if (object instanceof Serpent) {
      this.serpents.push(object);
    } else if (object instanceof Score) {
      this.serpents.push(object);
    } else if (object instanceof Line) {
      this.lines.push(object);
    }
  }

  draw(ctx) {
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    ctx.font = 'bold 25px Montserrat';
    ctx.fillStyle = 'white';
    ctx.fillText(this.score, 350, 240);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos) {
     return (pos[0] < 0) || (pos[1] < 0) ||
       (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  remove(object) {
    if (object instanceof Block) {
      this.blocks.splice(this.blocks.indexOf(object), 1);
    } else if (object instanceof Circle) {
      this.circles.splice(this.circles.indexOf(object), 1);
    }
  }
  step(delta, paused) {
    this.delta = delta;
    // debugger;
    // console.log(paused);
    if (!paused) {
      this.moveObjects(delta);
      this.checkCollisions();
    }
  }

  allObjects() {
    return [].concat(this.blocks, this.circles, this.serpents, this.lines);
  }

  checkCollisions() {
    const allObjects = [].concat(this.blocks, this.circles, this.lines);
    for (let i = 0; i < allObjects.length; i++) {
      const obj = allObjects[i];
      if (this.serpent.isCollidedWith(obj)) {
        const collision = this.serpent.collideWith(obj);
        this.score += collision;
        if (collision) return;
      }
    }
  }

  reset() {
    this.blocks = [];
    this.circles = [];
    this.serpents = [];
    this.lines = [];
    this.score = 0;
  }
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 400;
Game.DIM_Y = 850;
// Game.FPS = 60;

module.exports = Game;

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
