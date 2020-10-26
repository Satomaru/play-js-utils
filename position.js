class Position {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isInside(max) {
    return (
      (this.x >= 0 && this.x <= max.x) &&
      (this.y >= 0 && this.y <= max.y)
    );
  }

  isInRangeOf(min, max) {
    return (
      (this.x >= min.x && this.x <= max.x) &&
      (this.y >= min.y && this.y <= max.y)
    );
  }

  offset(offsetX, offsetY) {
    return new Position(this.x + offsetX, this.y + offsetY);
  }

  handle(callback) {
    return callback(this.x, this.y);
  }

  point(array) {
    return {
      read: () => array[this.y][this.x],
      write: (value) => array[this.y][this.x] = value
    }
  }
}

module.exports = Position;
