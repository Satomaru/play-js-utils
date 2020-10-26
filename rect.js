class Rect {

  static make(width, height, callback) {
    const array = Array(height).fill().map((row, y) =>
      Array(width).fill().map((cell, x) =>
        callback(x, y)
      )
    );

    return new Rect(array);
  }

  constructor(array) {
    this.array = array;
  }
  
  toArray(callback) {
    return this.array.map((row, y) =>
      row.map((cell, x) => callbacl(x, y, cell))
    );
  }

  forEach(callback) {
    this.array.forEach((row, y) =>
      row.forEach((cell, x) => callbacl(x, y, cell))
    );
  }
}

module.exports = Rect;
