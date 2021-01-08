exports.run = (client, message) => {
  let user = message.mentions.users.first();
      message.reply(`You have smacked ${message.mentions.users.first().username}`)
  }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'smack',
  description: 'Smacks a user.',
  usage: 'smack <user>'
};
