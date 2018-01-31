const parsePromised = (json) => {
  createPromise = new Promise((resolves, rejects) => {
    try {
      data = JSON.parse(json);
    } catch (e) {
      rejects(e.message);
    }
    resolves('parsing successful');
  });

  return createPromise;
};
parsePromised(process.argv[2]).then(null, console.log);
