// ==================================================
// Prototype extensions
// ==================================================

// eslint-disable-next-line func-names, no-extend-native
Array.prototype.first = function() {
  return this[0];
};

// eslint-disable-next-line func-names, no-extend-native
Array.prototype.last = function() {
  return this.slice(-1)[0];
};

// eslint-disable-next-line func-names
Array.range = function(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((elm, i) => elm + i);
};
