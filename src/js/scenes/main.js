import Phaser from "phaser";

// require("./extensions/array");
// require("./extensions/phaser");
// import { easeInQuad } from "./utils/easing";

// ==================================================

export default class MainScene extends Phaser.Scene {
  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.debugKey = this.input.keyboard.addKey(68);
  }

  update() {
    // --- horizontal
    if (this.cursors.left.justDown) {
      // left
    } else if (this.cursors.right.justDown) {
      // right
    }

    // --- vertical
    if (this.cursors.up.justDown) {
      // up
    } else if (this.cursors.down.justDown) {
      // down
    }
  }
}
