/* eslint-disable
  func-names
*/

import { Phaser } from "phaser";

Phaser.Tilemap.prototype.createBlankDefaultLayer = function(name) {
  return this.createBlankLayer(
    name,
    this.width,
    this.height,
    this.tileWidth,
    this.tileHeight,
  );
};

Phaser.Tilemap.prototype.getTilesByIndexes = function(
  indexes,
  x,
  y,
  width,
  height,
  layer,
) {
  indexes = Array.isArray(indexes) ? indexes : [indexes];
  x = x || 0;
  y = y || 0;
  width = width || this.width;
  height = height || this.height;
  layer = this.getLayer(layer);

  const output = [];
  for (let j = y; j < y + height; j++) {
    for (let i = x; i < x + width; i++) {
      if (indexes.includes(Number(this.layers[layer].data[j][i].index))) {
        output.push(this.layers[layer].data[j][i]);
      }
    }
  }

  return output;
};
