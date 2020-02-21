module.exports = function createDreamTeam(members) {
  try {
    return members
      .reduce((acc, name) => {
        if (typeof name === "string") {
          acc += name.replace(/\s/g, "")[0].toUpperCase();
        }
        return acc;
      }, "")
      .split("")
      .sort()
      .join("");
  } catch (error) {
    return false;
  }
};
