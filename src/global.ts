/*
*   global.ts
*/

import Discord = require("discord.js");

interface StringIndex {
    [index: string]: string;
}

export const prefix = "!m";
export var client: Discord.Client;
export var client_token: string;
export var mhelp: string;
export var res_strings = {} as StringIndex;
