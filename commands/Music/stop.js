let discord = require('discord.js');

exports.run = (client,message) => {
	
	let noVCEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"You need to be in a voice channel.")
	.setTimestamp();
	
	let stopEmbed = new discord.RichEmbed()
	.setColor("#00FF00")
	.addField('**Success:**',"Successfully stopped the current queue")
	.setTimestamp();
	
	let sameVCEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"We need to be in the same voice channel.")
	.setTimestamp();
	
	let noQueueEmbed = new discord.RichEmbed()
	.setColor("#FF0000")
	.addField('**Error:**',"There isn't a current Queue for this server")
	.setTimestamp();
	
	music.stop(message,{
		  //options
		novcMessage: noVCEmbed,
		stopMessage: stopEmbed,
		samevcMessage: sameVCEmbed,
		noqueueMessage: noQueueEmbed
	});
	
}
exports.path = '../../Music/stop.js';
exports.help = {
	name: "stop"
}