module.exports = function countCats(matrix) {
  return matrix.reduce((acc, line) => {
    line.map(item => {
      if (item === "^^") acc++;
    });
    return acc;
  }, 0);
};
