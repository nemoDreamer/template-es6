import Phaser from "phaser";

import MainScene from "./scenes/main";
import config from "./config/config";

window.onload = () => {
  window.game = new Phaser.Game({
    ...config,
    scenes: [MainScene],
  });
};
