"use strict";
/*
*   cmdhandler.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const global = require("./global");
const embed = require("./embed");
const embeds = require("./embeds.json");
const items = require("./items");
global.cmdhandlers["help"] = function help(message) {
    // message.channel.send(global.res_strings["help"]);
    const helpEmbed = embed.createEmbed(embeds.help);
    message.channel.send({ embed: helpEmbed });
};
global.cmdhandlers["shop"] = function shop(message) {
    // message.channel.send(global.res_strings["help"]);
    const shopEmbed = embed.createEmbed(embeds.shop);
    message.channel.send({ embed: shopEmbed });
};
global.cmdhandlers["inv"] = function inv(message) {
    // message.channel.send(global.res_strings["help"]);
    const invEmbed = items.invEmbed(message.author, embed.createEmbed(embeds.inv));
    message.channel.send({ embed: invEmbed });
};
exports.cmdhandlers = global.cmdhandlers;
