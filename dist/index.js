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
console.log("index.ts/index.js: Hello, world!");
global.client = new Discord.Client();
connect.connectWithResources();
global.client.once('ready', () => {
    console.log('Ready!');
});
global.client.on('message', message => {
    // console.log(message.content);
    if (!message.content.startsWith(global.prefix))
        return;
    msghandler.onmsg(message);
});
