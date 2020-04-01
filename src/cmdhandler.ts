/*
*   cmdhandler.ts
*/

import Discord = require("discord.js");
import global = require("./global");
import embed = require("./embed");
import embeds = require("./embeds.json");
import items = require("./items");

global.cmdhandlers["help"] = function help(message: Discord.Message) {
    // message.channel.send(global.res_strings["help"]);
    const helpEmbed = embed.createEmbed(embeds.help);
    message.channel.send({embed: helpEmbed});
}

global.cmdhandlers["shop"] = function shop(message: Discord.Message) {
    // message.channel.send(global.res_strings["help"]);
    const shopEmbed = embed.createEmbed(embeds.shop);
    message.channel.send({embed: shopEmbed});
}

global.cmdhandlers["inv"] = function inv(message: Discord.Message) {
    // message.channel.send(global.res_strings["help"]);
    const invEmbed = items.invEmbed(message.author, embed.createEmbed(embeds.inv));
    message.channel.send({embed: invEmbed});
}

export var cmdhandlers = global.cmdhandlers;
