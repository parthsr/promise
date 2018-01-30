const first = () => {
  Promise1 = new Promise((resolve) => {
    resolve('secretValue');
  });
  return Promise1;
};

const second = (values) => {
  Promise2 = new Promise((resolve) => {
    resolve(values);
  });
  return Promise2;
};
//
// const firstPromise = first();
// const secondPromise = firstPromise.then(values => second(values));
// secondPromise.then(console.log);

module.exports = {
  first,
  second,
};
