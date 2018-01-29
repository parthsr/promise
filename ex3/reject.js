const promise = new Promise((fullfil, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

module.exports = {
  promise,
};
