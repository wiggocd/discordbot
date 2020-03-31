/*
*   index.ts
*   Program Entry
*/

import Discord = require("discord.js");
import fs = require("fs");
import Highlight = require("highlight.js");

import global = require("./global");
import resources = require("./resources");
import connect = require("./connect");
import msghandler = require("./msghandler");
import items = require("./items");

console.log("index.ts/index.js: Hello, world!");
global.client = new Discord.Client();
connect.connectWithResources();

global.client.once('ready', () => {
    console.log('Ready!');
    global.client.user?.setActivity("!mhelp", {type: "LISTENING"});
    items.items_init();
});

global.client.on('message', message => {
    // console.log(message.content);
    if (!message.content.startsWith(global.prefix)) return;
    msghandler.onmsg(message);
});
