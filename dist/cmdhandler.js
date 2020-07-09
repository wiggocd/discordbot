"use strict";
/*
*   cmdhandler.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const global = require("./global");
const embed = require("./embed");
const embeds = require("./embeds.json");
const items = require("./items");
global.cmdhandlers["help"] = function help(message, cmd, args) {
    // message.channel.send(global.res_strings["help"]);
    const helpEmbed = embed.createEmbed(embeds.help);
    message.channel.send({ embed: helpEmbed });
};
global.cmdhandlers["shop"] = function shop(message, cmd, args) {
    const shopEmbed = embed.createEmbed(embeds.shop);
    message.channel.send({ embed: shopEmbed });
};
global.cmdhandlers["inv"] = function inv(message, cmd, args) {
    const invEmbed = items.invEmbed(message.author, embed.createEmbed(embeds.inv));
    message.channel.send({ embed: invEmbed });
};
global.cmdhandlers["use"] = function use(message, cmd, args) {
    var useEmbed;
    if (args.length > 3 || args.length < 2) {
        useEmbed = embed.createEmbed(embeds.syntax_use);
        message.channel.send({ embed: useEmbed });
    }
    else {
        const item = args[1];
        console.log(1);
        if (items.invCheck(message.author.tag, item) == true) {
            console.log(2);
            switch (items.getItem(item).type) {
                case "attack":
                    console.log(3);
                    if (args.length > 2) {
                        const targetPlayerTag = args[2];
                        if (global.playerstats.some(item => item.usertag === targetPlayerTag)) {
                            if (message.channel.client.users.resolve(targetPlayerTag) != null) {
                                items.damage(targetPlayerTag, items.getItem(item).damage);
                                global.playerstats.find(item => item.usertag === message.author.tag).xp += 25;
                                useEmbed = embed.createEmbed(embeds.use_attack);
                                useEmbed.fields[0].value = "You attacked `" + targetPlayerTag + "` with your " + item + " for " + items.getItem(item).damage + " Health Points!";
                                message.channel.send({ embed: useEmbed });
                            }
                        }
                    }
            }
        }
    }
};
exports.cmdhandlers = global.cmdhandlers;
