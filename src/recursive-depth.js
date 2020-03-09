module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let sum = 1;
    let max = sum;
    let arrDepth = arr.filter(item => Array.isArray(item));
    if (!arrDepth.length) return sum;
    for (let count = 0; count < arrDepth.length; count++) {
      max =
        arrDepth[count].flat()[0] === arrDepth[count].flat(Infinity)[0]
          ? Math.max(max, this.calculateDepth(arrDepth[count]) + 1)
          : (max = Math.max(max, this.calculateDepth(arrDepth[count]) + 1));
    }
    return max;
  }
};
