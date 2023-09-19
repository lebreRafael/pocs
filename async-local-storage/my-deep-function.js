const { asyncLocalStorage } = require("./async-local-storage-singleton");

module.exports = {
  myDeepFunction: () => {
    const myValue = asyncLocalStorage.getStore();
    console.log(`myValue read from deep function is: ${myValue}`);
  },
};
