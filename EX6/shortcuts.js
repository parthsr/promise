const promiseResolve = Promise.resolve('hi');
const promiseReject = Promise.reject(new Error('ssecret'));
promiseReject.catch((error) => {
  console.log(error.message);
  return error.message;
});

module.exports = {
  promiseResolve,
  promiseReject,
};
