/*
*   cmdhandler.ts
*/

import Discord = require("discord.js");
import global = require("./global");
import embed = require("./embed")
import embeds = require("./embeds.json")

global.cmdhandlers["help"] = function help(message: Discord.Message) {
    // message.channel.send(global.res_strings["help"]);
    const helpEmbed = embed.createEmbed(embeds.help);
    message.channel.send({embed: helpEmbed});
}

export var cmdhandlers = global.cmdhandlers;
