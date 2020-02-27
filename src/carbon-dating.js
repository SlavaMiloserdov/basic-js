const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  try {
    return isNaN(Number(sampleActivity.split("")[0])) ||
      parseFloat(sampleActivity) == 0 ||
      parseFloat(sampleActivity) > MODERN_ACTIVITY
      ? false
      : Math.ceil(
          Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
            (0.693 / HALF_LIFE_PERIOD)
        );
  } catch (error) {
    return false;
  }
};
