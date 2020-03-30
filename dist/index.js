"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
console.log("index.ts/index.js: Hello, world!");
var client_token = "";
var mhelp = "";
function login(token) {
    return client.login(token); // Keep safe!
}
function readresources() {
    fs.readFile("resources/client_token", (err, data) => {
        if (err)
            throw err;
        client_token = data.toString();
    });
    fs.readFile("resources/mhelp.md", (err, data) => {
        if (err)
            throw err;
        mhelp = data.toString();
    });
    return 1;
}
var res = readresources();
setTimeout(() => {
    if (res == 1) {
        login(client_token).catch(function (err) {
            throw err;
        });
    }
    else {
        throw console.log("Failed to load resources.");
    }
}, 200);
client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    console.log(message.content);
    switch (message.content) {
        case "!mhelp":
            message.channel.send(mhelp);
    }
});
