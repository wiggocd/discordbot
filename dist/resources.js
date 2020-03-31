"use strict";
/*
*   resources.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const global = require("./global");
function readStrings() {
    const dir_path = "resources/strings/";
    const dir = fs.opendirSync(dir_path);
    let dirent;
    while ((dirent = dir.readSync()) !== null) {
        let file = fs.readFileSync(dir_path + dirent.name);
        global.res_strings[dirent.name] = file.toString();
    }
    dir.closeSync();
}
function readToken() {
    fs.readFile("resources/client_token", (err, data) => {
        if (err)
            throw err;
        global.client_token = data.toString();
    });
}
function readresources() {
    readStrings();
    readToken();
    // console.log("Resource Strings:", global.res_strings);
    return 1;
}
exports.readresources = readresources;
