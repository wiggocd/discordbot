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
    global.lastTimeRecieved = new Date;
});

global.client.on('message', message => {
    // console.log(message.content);
    if (!message.content.startsWith(global.prefix)) return;
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
