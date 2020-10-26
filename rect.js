class Rect {

  static make(width, height, valueOrCallback = null) {
    let array;

    if (typeof valueOrCallback === 'function') {
      array = Array(height).fill().map((row, y) =>
        Array(width).fill().map((cell, x) => valueOrCallback(x, y))
      );
    } else {
      array = Array(height).fill().map(() => 
        Array(width).fill(valueOrCallback)
      );
    }

    return new Rect(array);
  }

  constructor(array) {
    this.array = array;
  }

  toArray(callback) {
    return this.array.map((row, y) =>
      row.map((cell, x) => callbacl(cell, x, y))
    );
  }

  forEach(callback) {
    this.array.forEach((row, y) =>
      row.forEach((cell, x) => callbacl(cell, x, y))
    );
  }
}

module.exports = Rect;
