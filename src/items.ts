/*
*   items.ts
*/

import item_list = require("./items.json")
import embeds = require("./embeds.json")

export function items_init() {
    for (let i in item_list.weapons) {
        let weapon = item_list.weapons[i];
        embeds.shop.fields[weapon.category].value += " `"+weapon.name+"` ~ Damage: *"+weapon.damage+"* ~ Cost: **$"+weapon.cost+"**\n";
    }
}
