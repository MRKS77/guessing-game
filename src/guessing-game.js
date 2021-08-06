class GuessingGame {
  constructor() {
    this.range = [];
    this.mid;
  }

  setRange(min, max) {
    this.range = [min, max];
  }

  guess() {
    return (this.mid = Math.ceil(
      (this.range[1] - this.range[0]) / 2 + this.range[0]
    ));
  }

  lower() {
    this.range[1] = this.mid;
    return this.guess();
  }

  greater() {
    this.range[0] = this.mid;
    return this.guess();
  }
}

module.exports = GuessingGame;
