/*
*   items.ts
*/

import Discord = require("discord.js");
import item_list = require("./items.json");
import embeds = require("./embeds.json");
import embed = require("./embed");
import global = require("./global");
import playerstats = require("./playerstats.json");

export function items_init() {
    global.item_arr = item_list as Array<any>;
    for (let i in item_list) {
        let weapon = item_list[i];
        embeds.shop.fields[weapon.category].value += " `"+weapon.name+"` ~ Damage: *"+weapon.damage+"* ~ Cost: **$"+weapon.cost+"**\n";
    }
}

export function userCheck(usertag: string) {
    global.playerstats = playerstats as Array<any>;
    console.log("User in DB: "+global.playerstats.some(item => item.usertag === usertag));
    if (global.playerstats.some(item => item.usertag === usertag) == true) {
        return true;
    } else {
        console.log("Pushing stats to array...");
        global.playerstats.push({
            usertag: usertag,
            inv: ["fists"],
            hp: 100,
            cash: 10,
            xp: 0,
            startdate: new Date().toDateString()
        });
    }
}

export function invCheck(usertag: string, item: string) {
    if (userCheck(usertag) == true) {
        const inv = global.playerstats.find(item => item.usertag == usertag).inv as Array<string>;
        if (inv.find(obj => obj == item)) {
            return true;
        } else {
            return false;
        }
    } else {
        invCheck(usertag, item);
    }
}

export function invEmbed(user: Discord.User, embed: Discord.MessageEmbed) {
    var newEmbed = embed;
    if (userCheck(user.tag) == true) {
        const userPlayerStats = global.playerstats.find(item => item.usertag == user.tag);
        const weaponsArr: any[] = userPlayerStats.inv;
        var weaponsString: string = "";

        newEmbed.fields[0].value = "Cash :moneybag:: `"+userPlayerStats.cash+"`\nXP :coffee:: `"+userPlayerStats.xp+"`\n";
        weaponsArr.forEach(element => {
            weaponsString += '`'+element+'`';
        });
        newEmbed.fields[1].value = weaponsString;
    } else {
        invEmbed(user, embed);
    }
    return newEmbed;
}

export function getItem(item: string) {
    return global.item_arr.find(obj => obj.name == item);
}

export function damage(usertag: string, value: number) {
    if (global.playerstats.find(item => item.usertag == usertag).health - value < 1) {
        global.playerstats.find(item => item.usertag == usertag).health = 100;
        global.playerstats.find(item => item.usertag == usertag).inv = ["fists"];
    } else {
        global.playerstats.find(item => item.usertag == usertag).health -= value;
    }
}
