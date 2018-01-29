const promise = new Promise((fullfil, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});


const onReject = (msg) => {
  console.log(msg);
};
promise.then(onReject);
module.exports = {
  promise,
  onReject,
};
