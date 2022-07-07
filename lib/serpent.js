const MovingObject = require("./moving_object");
const Util = require("./util");
const Circle = require("./circle");
const Block = require("./block");
const SerpentNode = require("./serpent_node");
const Line = require("./line");

class Serpent extends MovingObject {
  constructor(options) {
    options.radius = 10;
    options.vel = [0,0];
    options.color = 'yellow';
    // options.pos = [5,5];
    super(options);
    this.prevX = [];
    this.length = 4;
    this.leftColliding = false;
    this.rightColliding = false;
    // this.nodes = [];
    // for (let i = 0; i < this.length; i++) {
    //   this.nodes.push(new SerpentNode({pos: [this.pos[0], this.pos[1]+(i*22)] }))
    // }
    this.power = this.power.bind(this);
  }
