"use strict";
/*
*   index.ts
*   Program Entry
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const global = require("./global");
const resources = require("./resources");
const connect = require("./connect");
const msghandler = require("./msghandler");
const items = require("./items");
console.log("index.ts/index.js: Hello, world!");
global.client = new Discord.Client();
connect.connectWithResources();
global.client.once('ready', () => {
    var _a;
    console.log('Ready!');
    (_a = global.client.user) === null || _a === void 0 ? void 0 : _a.setActivity("!mhelp", { type: "LISTENING" });
    items.items_init();
    global.lastTimeRecieved = new Date;
});
global.client.on('message', message => {
    // console.log(message.content);
    if (!message.content.startsWith(global.prefix))
        return;
    msghandler.onmsg(message);
});
function exitHandler() {
    if (global.playerstats != null) {
        resources.saveStats("dist/playerstats.json", global.playerstats);
        resources.saveStats("src/playerstats.json", global.playerstats);
    }
}
process.on('exit', exitHandler);
process.on('SIGINT', exitHandler);
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler);
