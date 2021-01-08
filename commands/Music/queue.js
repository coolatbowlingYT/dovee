let discord = require('discord.js');
exports.run = (client,message) => {
	let serverQueue = client.music.serverqueue(`${message.guild.id}`);
	
	let noVCEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"You need to be in a voice channel.")
	.setTimestamp();
	
	let sameVCEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"We need to be in the same voice channel.")
	.setTimestamp();
	
	let noQueueEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"There isn't a current Queue to be stopped")
	.setTimestamp();
	
	let i = -1;
	let queueEmbed = new discord.RichEmbed()
	.setTimestamp()
	.setAuthor(`Server Queue:`, `${message.guild.iconURL ? message.guild.iconURL : client.user.avatarURL}`)
	.setColor(`${message.member.displayHexColor}`)
	.setFooter(`Total queue size: ${serverQueue.songs.length} songs`)
	.addField("**Now Playing:**", `[${serverQueue.songs[0].title}](https://youtube.com/watch?v=${serverQueue.songs[0].id})`)
	.addField('**Song Queue:**', serverQueue.songs[1] ? serverQueue.songs.map(song => `**[${++i}] -** [${song.title}](https://youtube.com/watch?v=${song.id})`).slice(1, 11).join('\n') : "Empty")
	.addField('**Paused**',`\`${serverQueue.playing == false ? true : false}\``)
	.addField('**Playing in**', `\`${serverQueue.voiceChannel.name}\``);
	
	client.music.queue(message,{
  queueMessage: queueEmbed
  });
	
}
exports.path = '../../Music/queue.js';
exports.help = {
	name: "queue",
	alias: "q"
}