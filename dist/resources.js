"use strict";
/*
*   resources.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const global = require("./global");
function readresources() {
    fs.readFile("resources/client_token", (err, data) => {
        if (err)
            throw err;
        global.client_token = data.toString();
    });
    fs.readFile("resources/mhelp.md", (err, data) => {
        if (err)
            throw err;
        global.mhelp = data.toString();
    });
    return 1;
}
exports.readresources = readresources;
