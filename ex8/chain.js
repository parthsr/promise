const attachTitle = arg => `DR. ${arg}`;

promise = new Promise((resolves) => {
  resolves('MANHATTAN');
});

promise.then(attachTitle).then(console.log);
