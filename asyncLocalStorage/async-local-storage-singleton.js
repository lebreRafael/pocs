const { AsyncLocalStorage } = require("node:async_hooks");

module.exports = {
  asyncLocalStorage: new AsyncLocalStorage(),
};
