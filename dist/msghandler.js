"use strict";
/*
*   msghandler.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const global = require("./global");
require("./cmdhandler");
function onmsg(message) {
    console.log(message.createdAt.getTime(), ' | ', global.lastTimeRecieved.getTime());
    if (message.createdAt.getTime() < global.lastTimeRecieved.getTime() + 1200)
        return;
    global.lastTimeRecieved = new Date;
    setTimeout(() => {
        const msgstring = message.content;
        const cmd = msgstring.slice(global.prefix.length).split(' ', 1)[0];
        const args = msgstring.slice(cmd.length + 2).split(' ');
        console.log(message.author.username, cmd, args);
        if (global.cmdhandlers[cmd] != undefined && typeof Function) {
            console.log(global.cmdhandlers[cmd]);
            global.cmdhandlers[cmd](message, cmd, args);
            // message.channel.send(global.res_strings[cmd]);
        }
    }, 500);
}
exports.onmsg = onmsg;
