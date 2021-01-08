const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
let ugu = message.content.split(" ").slice(1, 2).join(" ");	  
let wmem = message.mentions.members.first();
//const owner = message.guild.members.get("257282842524909569");
  if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "257282842524909569")return message.reply('you have to have the `"BAN_MEMBERS"` permission to use this command');
  if(!wmem)return message.reply("I couldn't find that member");
 // if(wmem === owner)return message.reply("i won't ban my master");
  let reason = message.content.split(" ").slice(2).join(" ");

if (reason) {
wmem.ban(reason);
}
if (!reason) {
wmem.ban();
}

message.channel.send(`${message.member.displayName} has banned ${wmem.displayName}`);

}
module.exports.help = {
    name: "ban"
}