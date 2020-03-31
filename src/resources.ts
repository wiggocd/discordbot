/*
*   resources.ts
*/

import Discord = require("discord.js");
import fs = require("fs");
import global = require("./global");

export function readresources() {
    fs.readFile("resources/client_token", (err, data) => {
        if (err) throw err;
        global.client_token = data.toString();
    });
    fs.readFile("resources/mhelp.md", (err, data) => {
        if (err) throw err;
        global.mhelp = data.toString();
    });
    return 1;
}
