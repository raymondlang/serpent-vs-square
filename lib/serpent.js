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

  addLength(length) {
    this.length += length;
  }

  collideWith(otherObject) {
    // debugger;
    if (otherObject instanceof Circle) {
      this.length += otherObject.value;
      // this.updateLength()
      otherObject.remove();
      return 0;
    } else if (otherObject instanceof Block) {
      if (otherObject.value < this.length) {
        for (let i=0; i < otherObject.value; i++) {
          this.length -= 1;
        }
        // this.updateLength(otherObject.value);
        // this.length -= otherObject.value;
        otherObject.remove();
        return otherObject.value;
      }
      else {
        let length = this.length;
        this.length -= otherObject.value;
        // this.updateLength(otherObject.value);
        otherObject.remove();
        return length;
        // this.remove();
      }
    } else if (otherObject instanceof Line) {
        // debugger;
        // if (this.pos[0] < otherObject.pos[0] + 2 && this.pos[0] < otherObject.pos[0] -2) {
        //   this.pos[0] = otherObject.pos[0] -10;
        //   return 0;
        // }

        if (otherObject.pos[0] > this.pos[0]) {
          this.rightColliding = true;
          // this.pos[0] = otherObject.pos - this.radius;
        } else {
          this.leftColliding = true;
          // this.pos[0] = otherObject.pos + this.radius;
        }
        this.vel = [0,0];
        return 0;
    }
  }
  power(impulse) {
    this.vel = [0, 0];

    //
    // debugger;
    // if (this.pos[0] > 1 && this.pos[0] < 8) {
    //   debugger;
    // }

    // if (this.pos[0] + impulse[0] + this.vel[0] < this.radius ||
    //   this.pos[0] + this.radius + impulse[0] + this.vel[0] > 399) {
    //   impulse[0] = 0;
    //   this.vel[0] = 0;
    // }

    // console.log(this.pos[0]);

    if (this.pos[0] + this.radius > 399 && impulse[0] > 0) {
      // return;
      impulse[0] = 0;
      this.pos[0] = 389;
      return;
    }

    if (impulse[0] < 0 && !this.leftColliding) {
      this.vel[0] += impulse[0];
    } else if (impulse[0] > 0 && !this.rightColliding) {
      this.vel[0] += impulse[0];
    } else {
      // debugger;
    }

    this.leftColliding = false;
    this.rightColliding = false;


    // if (this.pos[0] > 1 && this.pos[0] < 399 ) {
    //   this.vel[0] += impulse[0];
    // }
    // this.pos[1] += impulse[1];
  }
