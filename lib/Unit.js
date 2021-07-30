class Unit {
  constructor (magnitude) {
    this.magnitude = magnitude;
  }

  convert (n) {
    const mag = this.magnitude;
    return [ n / mag, n % mag];
  }

  to (...units) {
    return n => units.reduce(
      (arr, unit) => [
        ...arr.slice(0, -1), 
        ...unit.convert(arr[arr.length-1])
      ], [n]
    ).slice(0,-1);
  }

  from (...units) {
    return (...ns) => units.reduce(
      (sum, unit, i) => sum + ns[i] * unit.magnitude
      , 0) / this.magnitude;
  }
}

module.exports = Unit;
