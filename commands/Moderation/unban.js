const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let users = args[0];
  let ugu = message.content.split(" ").slice(1, 2).join(" ");	  
  let reason = args.slice(1).join(" ");
  let whem = client.users.cache.get('id')
  client.unbanReason = reason;
  client.unbanAuth = message.author;
 // let modlog = client.channels.find("name", "logs");
 // if (!modlog) return message.reply("I cannot find a logs channel");
 // if (reason.length < 1)
   // return message.reply("You must supply a reason for the unban.");
  if (!users)
    return message
      .reply("You must supply a User Resolvable, such as a user id.")
      .catch(console.error);
//  if (message.author.bot) return;
  //("Bots can not use bot commands");
  whem.guild.unban(reason)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "unban",
  description: "Unbans the user.",
  usage: "unban [mention] [reason]"
};
