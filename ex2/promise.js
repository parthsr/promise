const newpromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
});


newpromise.then((msg) => {
  console.log(msg);
});

module.exports = newpromise;
