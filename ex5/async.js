const newPromise = new Promise((resolves) => {
  console.log('i am in the promise');
  resolves('PROMISE VALUE');
});

newPromise.then(console.log);
console.log('MAIN PROGRAM');

module.exports = newPromise;
