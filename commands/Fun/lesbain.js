const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
const uwu = message.mentions.members.first()||message.member;
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.MessageEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **${uwu.displayName} is ${gay}% lesbain!** :gay_pride_flag: #LGBTQ+`);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "lesbian"
};