const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
const uwu = args[1];
const owo = args[0];
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.MessageEmbed()
        message.channel.send(`**${owo} is ${gay}% compatible with ${uwu}!** :heart: #LOVE`)
};

module.exports.help = {
    name: "ship"
};