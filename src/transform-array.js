module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  return transformArr(transformArr(arr));
};

function transformArr(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    if (!String(arr[index]).match(/--/)) {
      let { newArr, flag } = getNewArr(index, arr);
      if (flag < 0) {
        arr[index - 1] !== undefined
          ? result.push("--discard-prev")
          : result.push("--discard-next");
      } else {
        newArr.forEach(i => {
          i === undefined ? result.push(NaN) : result.push(i);
        });
      }
    }
  }
  return result;
}

function getNewArr(index, array) {
  let res = [];
  let counter = 1;
  let discardNext = "--discard-next";
  let discardPrev = "--discard-prev";
  let doubleNext = "--double-next";
  let doublePrev = "--double-prev";
  switch (array[index - 1]) {
    case doubleNext:
      counter++;
      break;
    case discardNext:
      counter--;
      break;
  }
  switch (array[index + 1]) {
    case doublePrev:
      counter++;
      break;
    case discardPrev:
      counter--;
      break;
  }
  for (let i = 0; i < counter; i++) {
    res.push(array[index]);
  }
  return { newArr: res, flag: counter };
}
