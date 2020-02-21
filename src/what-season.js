module.exports = function getSeason(date) {
  try {
    if (date === undefined) return "Unable to determine the time of year!";
    date.setSeconds(30);
    const timeOfYear = [
      "winter",
      "winter",
      "spring",
      "spring",
      "spring",
      "summer",
      "summer",
      "summer",
      "autumn",
      "autumn",
      "autumn",
      "winter"
    ];
    return timeOfYear[date.getMonth()];
  } catch (error) {
    throw new Error("Invalid data");
  }
};
