const Discord = require('discord.js');
module.exports.run = async (client,message,args) => {
let embed = new Discord.MessageEmbed()
.setDescription(` Invite ${client.user.username} to your server https://discordapp.com/oauth2/authorize?client_id=687068867331489888&scope=bot&permissions=8`)
message.channel.send(embed);
                                              
}
module.exports.help = {
name: "invite",
alias: "addbot"
}