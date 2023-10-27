"use strict";
// sample code
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    res.end("Hello, world!");
});
server.listen(3000, () => {
    console.log("listening on 3000");
});
// install typescript, ts-node and nodemon to run ts file directly  without compiling on terminal with
//  npm install -D typescript ts-node nodemon
// and add script to package.json => "start": "nodemon --exec ts-node src/index.ts" or dev: "nodemon  src/index.ts"
