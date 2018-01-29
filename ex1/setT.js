const validate = (input) => {
  if (input === null || input === undefined) {
    return false;
  }
  return true;
};
const timer = (input) => {
  if (!validate(input)) {
    return false;
  }
  setTimeout(() => {
    console.log(input);
  }, 300);
  return true;
};
module.exports = timer;
