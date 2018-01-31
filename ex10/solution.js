const alwaysThrows = () => {
  throw new Error('OH NOES');
};
const iterate = (arg) => {
  console.log(arg);
  return arg + 1;
};

let promise = Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch((value) => {
    console.log(value.message);
    return value.message;
  });

module.exports = {
  alwaysThrows,
  iterate,
  promise,
};
