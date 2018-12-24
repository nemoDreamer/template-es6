import Phaser from "phaser";

const MAP = {
  width: 64,
  height: 48,
};

const TILE = {
  width: 11,
  height: 11,
};

const PIXELS = {
  width: TILE.width * MAP.width,
  height: TILE.height * MAP.height,
};

export default {
  type: Phaser.AUTO,
  width: PIXELS.width,
  height: PIXELS.height,
  zoom: 1,
  pixelArt: true,
  antialias: false,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  input: {
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false,
  },
};
