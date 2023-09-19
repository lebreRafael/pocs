const http = require("node:http");
const { asyncLocalStorage } = require("./async-local-storage-singleton");
const { myDeepFunction } = require("./my-deep-function");

let idSeq = 0;
http
  .createServer((req, res) => {
    const myNewValue = `just for this request ${idSeq++}`;
    console.log(555555555555, "real value", { myNewValue });

    asyncLocalStorage.run(myNewValue, async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      myDeepFunction();
      res.end();
    });
  })
  .listen(8080);
