const promise = new Promise((resolves, rejects) => {
  resolves('I FIRED');
  rejects(new Error('I DID NOT FIRE'));
});

const onRejected = (error) => {
  console.log(error.message);
};

promise.then(console.log, onRejected);

module.exports = promise;
