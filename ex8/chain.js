const attachTitle = arg => `DR. ${arg}`;

promise = new Promise((resolves) => {
  resolves('MANHATTAN');
});

// console.log(promise.then(attachTitle));
module.exports = {
  promise,
  attachTitle,
};

// const attachTitle = name => `DR. ${name}`;
// const promise = new Promise((fulfill) => {
//   fulfill('MANHATTAN');
// });
// const promiseCallback = (value) => {
//   console.log('Yo', value);
//   attachTitle(value);
//   return 10;
// };
// const pp = promise.then(promiseCallback).then((value2) => {
//   console.log('value2', value2);
// });
