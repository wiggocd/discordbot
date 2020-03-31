"use strict";
/*
*   index.ts
*   Program Entry
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const global = require("./global");
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
});
global.client.on('message', message => {
    // console.log(message.content);
    if (!message.content.startsWith(global.prefix))
        return;
    msghandler.onmsg(message);
});
