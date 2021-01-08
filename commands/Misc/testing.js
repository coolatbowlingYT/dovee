const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	  message.channel.send(`Welcome ${message.author.username} to ${message.guild}`)
	console.log(`ping command has been used by ${message.author.username} in ${message.guild}`);
    ;

}
module.exports.help = {
 name: "testing",
 alias: "pingu"
}