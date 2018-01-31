const parsePromised = (json) => {
  createPromise = new Promise((resolves, rejects) => {
    try {
      resolves(JSON.parse(json));
    } catch (e) {
      rejects(e.message);
    }
  });

  return createPromise;
};
parsePromised(process.argv[2]).then(null, console.log);

module.exports = parsePromised;
