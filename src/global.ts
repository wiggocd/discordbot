/*
*   global.ts
*/

import Discord = require("discord.js");

export interface StringIndexedArray {
    [index: string]: any;
}

export interface StringIndexedStringArray {
    [index: string]: string;
}

export const prefix = "!m";
export var client: Discord.Client;
export var client_token: string;
export var res_strings = {} as StringIndexedStringArray;
export var cmdhandlers = {} as StringIndexedArray;
export var res_json = {} as StringIndexedArray;
export let color_tan = "#edcc90";
