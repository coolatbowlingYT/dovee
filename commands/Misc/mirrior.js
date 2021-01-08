const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
const uwu = message.mentions.members.first()||message.member;
		var MessageEmbed = new Discord.MessageEmbed()
		.setColor(`${message.member.displayHexColor}`)
    .setTitle(`Profile pic for: ${uwu.displayName}`)
		.setImage(message.uwu.displayAvatarURL())
		.setFooter(`Requested by: ${message.member.displayName}`)
      message.channel.send(MessageEmbed);
}

module.exports.help = {
    name: "mirror",
    alias: "pfp"
}