"use strict";
/*
*   items.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const item_list = require("./items.json");
const embeds = require("./embeds.json");
const global = require("./global");
const playerstats = require("./playerstats.json");
function items_init() {
    for (let i in item_list.weapons) {
        let weapon = item_list.weapons[i];
        embeds.shop.fields[weapon.category].value += " `" + weapon.name + "` ~ Damage: *" + weapon.damage + "* ~ Cost: **$" + weapon.cost + "**\n";
    }
}
exports.items_init = items_init;
function userCheck(usertag) {
    global.playerstats = playerstats;
    console.log("User in DB: " + global.playerstats.some(item => item.usertag === usertag));
    if (global.playerstats.some(item => item.usertag === usertag) == true) {
        return true;
    }
    else {
        console.log("Pushing stats to array...");
        global.playerstats.push({
            usertag: usertag,
            inv: ["fists"],
            cash: 10,
            xp: 0,
            startdate: new Date().toDateString()
        });
    }
}
exports.userCheck = userCheck;
function invCheck(usertag, item) {
    if (userCheck(usertag) == true) {
        const inv = global.playerstats.find(item => item.usertag == usertag).inv;
        if (inv.find(obj => obj == item)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        invCheck(usertag, item);
    }
}
exports.invCheck = invCheck;
function invEmbed(user, embed) {
    var newEmbed = embed;
    if (userCheck(user.tag) == true) {
        const userPlayerStats = global.playerstats.find(item => item.usertag == user.tag);
        const weaponsArr = userPlayerStats.inv;
        var weaponsString = "";
        newEmbed.fields[0].value = "Cash :moneybag:: `" + userPlayerStats.cash + "`\nXP :coffee:: `" + userPlayerStats.xp + "`\n";
        weaponsArr.forEach(element => {
            weaponsString += '`' + element + '`';
        });
        newEmbed.fields[1].value = weaponsString;
    }
    else {
        invEmbed(user, embed);
    }
    return newEmbed;
}
exports.invEmbed = invEmbed;
