"use strict";
/*
*   items.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
const item_list = require("./items.json");
const embeds = require("./embeds.json");
function items_init() {
    for (let i in item_list.weapons) {
        let weapon = item_list.weapons[i];
        embeds.shop.fields[weapon.category].value += " `" + weapon.name + "` ~ Damage: *" + weapon.damage + "* ~ Cost: **$" + weapon.cost + "**\n";
    }
}
exports.items_init = items_init;
