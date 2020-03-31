/*
*   msghandler.ts
*/

import Discord = require("discord.js");
import global = require("./global");

export function onmsg(message: Discord.Message) {

    const msgstring = message.content;
    const cmd = msgstring.slice(global.prefix.length).split(' ', 1)[0];
    const args = msgstring.slice(cmd.length+2).split(' ');
    console.log(message.author.username, cmd, args);
    
    switch (cmd) {
        case "help":
            message.channel.send(global.res_strings["mhelp"]);
    }

}
