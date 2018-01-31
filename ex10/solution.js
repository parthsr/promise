const alwaysThrows = () => new Error('OH NOES');
const iterate = (arg) => {
  console.log(arg);
  return arg + 1;
};
module.exports = {
  alwaysThrows,
  iterate,
};
