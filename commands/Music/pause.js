let discord = require('discord.js');

exports.run = (client,message) => {
	
	let noVCEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"You need to be in a voice channel.")
	.setTimestamp();
	
	let pauseEmbed = new discord.RichEmbed()
	.setColor("#00FF00")
	.addField('**Success:**',"Successfully paused the current song")
	.setTimestamp();
	
	let sameVCEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"We need to be in the same voice channel.")
	.setTimestamp();
	
	let noQueueEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"There isn't a current Queue to be stopped")
	.setTimestamp();

	
	client.music.pause(client,message,{
		  //options
		novcMessage: noVCEmbed,
		pauseMessage: pauseEmbed,
		samevcMessage: sameVCEmbed,
		noqueueMessage: noQueueEmbed
	});
	
}
exports.path = '../../Music/pause.js';
exports.help = {
	name: "pause"
}