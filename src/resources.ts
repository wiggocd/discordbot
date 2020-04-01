/*
*   resources.ts
*/

import fs = require("fs");
import global = require("./global");

function readStrings() {
    const dir_path = "resources/strings/";
    const dir = fs.opendirSync(dir_path);
    let dirent: fs.Dirent;
    while ((dirent = dir.readSync()) !== null) {
        let file = fs.readFileSync(dir_path+dirent.name);
        global.res_strings[dirent.name]=file.toString();
    }
    dir.closeSync();
}

function readToken() {
    fs.readFile("resources/client_token", (err, data) => {
        if (err) throw err;
        global.client_token = data.toString();
    });
}

export function readresources() {
    readStrings();
    readToken();
    // console.log("Resource Strings:", global.res_strings);
    return 1;
}

export function saveStats(jsonPath: string, arr: Array<any>) {
    const data = JSON.stringify(arr);
    fs.writeFile(jsonPath, data, (err) => {
        if (err) throw err;
        console.log("Saved to "+jsonPath);
    });
}
