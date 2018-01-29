newpromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
});


newpromise.then((msg) => {
  console.log(msg);
});

module.exports = newpromise;
