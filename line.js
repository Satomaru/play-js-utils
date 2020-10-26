class Line {

  static make(length, valueOrCallback = null) {
    let array;

    if (typeof valueOrCallback === 'function') {
      array = Array(length).fill().map((item, index) => valueOrCallback(index));
    } else {
      array = Array(length).fill(valueOrCallback);
    }

    return new Line(array);
  }

  constructor(array) {
    this.array = array;
  }

  toArray(callback) {
    return this.array.map((item, index) => callback(item, index));
  }

  forEach(callback) {
    this.array.forEach((item, index) => callback(item, index));
  }
}

module.exports = Line;
