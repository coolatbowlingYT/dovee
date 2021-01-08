const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
const uwu = message.mentions.members.first()||message.member;
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.MessageEmbed()
        .setColor("#f442d4")
        .setTitle(`**${uwu.displayName} is ${gay}% a simp!**`);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "simp"
};