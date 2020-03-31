"use strict";
/*
*   connect.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const global = require("./global");
const resources = require("./resources");
function login(token) {
    return global.client.login(token); // Keep token secure
}
exports.login = login;
function connectWithResources() {
    var res = resources.readresources();
    setTimeout(() => {
        if (res == 1) {
            login(global.client_token).catch(function (err) {
                throw err;
            });
        }
        else {
            throw console.log("Failed to load resources.");
        }
    }, 200);
}
exports.connectWithResources = connectWithResources;
