
const Discord = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (client, message, args) => {

const target = message.mentions.members.first();

        const { body } = await get("https://rra.ram.moe/i/r?type=slap");
        await message.channel.send({
            embed: {
                "title": "ugu",
                "description": `**${message.member.displayName}** is slapping ${message.mentions.users.first().username} ...`,
                "color": 0x0fff00,
                "image": {
                    "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`
                }
            }
        });

};
module.exports.help = {
	name: "slap"
}