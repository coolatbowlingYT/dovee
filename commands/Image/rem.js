const Discord = require('discord.js');
const { get } = require('snekfetch');

module.exports.run = async (client, message) => {
const { body } = await get("https://nekobottm-site.glitch.me/i/r/rem");
// updated the api that's y it errored out
let link = `https://nekobottm-site.glitch.me/${body.path.replace('/i/','')}`;
  console.log(link)
	var hi = new Discord.MessageEmbed()
   .setDescription(`[Picture link](${link})`)
   .setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setImage(link)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL()}`)
message.channel.send(hi)
  
}
module.exports.help = {
    name: "rem"
}