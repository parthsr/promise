const promise = new Promise((fullfil, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});


const onReject = (msg) => {
  if (msg === null || msg === undefined) {
    return false;
  }
  console.log(msg);
  return true;
};
promise.then(onReject);
module.exports = {
  promise,
  onReject,
};
