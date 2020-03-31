"use strict";
/*
*   msghandler.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const global = require("./global");
function onmsg(message) {
    const msgstring = message.content;
    const cmd = msgstring.slice(global.prefix.length).split(' ', 1)[0];
    const args = msgstring.slice(cmd.length + 2).split(' ');
    console.log(message.author.username, cmd, args);
    switch (cmd) {
        case "help":
            message.channel.send(global.res_strings["mhelp"]);
    }
}
exports.onmsg = onmsg;
