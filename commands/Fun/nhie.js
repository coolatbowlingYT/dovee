const Discord = require('discord.js');
const nhie = require('../../data/nhie') //Lol, I know, I am so stupid.
exports.run = async (client, message, args) => {//lmao i didn't see this here
    args = args.join(" ");
let embed = new Discord.MessageEmbed()
     .setTitle(`${nhie[Math.floor(Math.random() * nhie.length)]}`)
     .setColor("RANDOM")
     .setThumbnail('https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2Fi5cSOHJR_400x400.jpg?v=1583949858821')
message.channel.send(embed)
.then(msg => { 
		msg.react(`✅`)
    msg.react(`❎`)});
  //?
//:white_check_mark:, :negative_squared_cros_mark:

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'never-have-i-ever',
  alias: 'nhie',
  description: 'Sends a random nhie.',
  usage: 'nhie'
};