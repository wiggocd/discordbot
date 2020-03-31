/*
*   connect.ts
*/

import Discord = require("discord.js");
import fs = require("fs");
import global = require("./global");
import resources = require("./resources");

export function login(token: string) {
    return global.client.login(token); // Keep token secure
}

export function connectWithResources() {
    var res = resources.readresources();
    setTimeout(() => {
        if (res == 1) {
            login(global.client_token).catch(function(err) {
                throw err;
            });
        } else {
            throw console.log("Failed to load resources.");
        }
    }, 200);
}
