const client = require('nekos.life');
let discord = require('discord.js');
const { sfw } = new client();
module.exports.run = async (client, message, args) => {

const uwu = message.mentions.members.first()||message.member;
sfw.poke().then(res => {
console.log(res)
let embed = new discord.MessageEmbed()
.setTitle(`**${message.member.displayName}** is poking ${uwu.displayName}...`)
.setColor("Random")
.setImage(res.url)
         message.channel.send(embed);
})

};
module.exports.help = {
	name: "poke"
}