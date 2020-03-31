"use strict";
/*
*   cmdhandler.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const global = require("./global");
const embed = require("./embed");
const embeds = require("./embeds.json");
global.cmdhandlers["help"] = function help(message) {
    // message.channel.send(global.res_strings["help"]);
    const helpEmbed = embed.createEmbed(embeds.help);
    message.channel.send({ embed: helpEmbed });
};
exports.cmdhandlers = global.cmdhandlers;
