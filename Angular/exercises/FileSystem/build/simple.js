"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// asynchronous * non-blocking
// sychronos * we are blocking the executing of the main thread
// streaming * when we read chunks of files of a big file
fs.readFile('./data/file.txt', 'utf8', (err, data) => {
    if (err)
        throw err;
    console.log(data);
    return data;
});
