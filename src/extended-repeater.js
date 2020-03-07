module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  repeatTimes = repeatTimes || 1;
  if (addition && !additionRepeatTimes) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = additionRepeatTimes || 0;
  }
  separator = separator || "+";
  additionSeparator = additionSeparator || "|";

  let result = [];
  let arrayAddition = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    arrayAddition.push(String(addition));
  }
  for (let i = 0; i < repeatTimes; i++) {
    result.push(String(str) + arrayAddition.join(additionSeparator));
  }

  return result.join(separator);
};
