const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
const uwu = message.mentions.members.first()||message.member;
    let gay = Math.round(Math.random() * 200);

    let gayembed = new Discord.MessageEmbed()
        .setColor("#f442d4")
      .setTitle(`**${uwu.displayName}\s profile picture makes them look ${gay} years old!**`);
        
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "age"
};