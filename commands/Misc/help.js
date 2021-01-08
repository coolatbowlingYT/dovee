const Discord = require('discord.js')

module.exports.run = (client, message) => {

// your pages, basically what the text will display.
						let pages = [];
						let check = function(){
							if(client.currencyCommands){
							pages.push(`**Currency Commands [${client.currencyCommands.size}]**\n\n${'`'+client.currencyCommands.map(c=>c.help.name).join('` `')+'`'}`)
							}
              if(client.xpCommands){
							pages.push(`**XP Commands [${client.xpCommands.size}]**\n\n${'`'+client.xpCommands.map(c=>c.help.name).join('` `')+'`'}`)
							}
							if(client.funCommands){
							pages.push(`**Fun Commands [${client.funCommands.size}]**\n\n${'`'+client.funCommands.map(c=>c.help.name).join('` `')+'`'}`)
							}
							if(client.miscCommands){
							pages.push(`**Misc Commands [${client.miscCommands.size}]**\n\n${'`'+client.miscCommands.map(c=>c.help.name).join('` `')+'`'}`)
							}
							if(client.moderationCommands){
							pages.push(`**Moderation Commands [${client.moderationCommands.size}]**\n\n${'`'+client.moderationCommands.map(c=>c.help.name).join('` `')+'`'}`)
							}
							if(client.musicCommands){
							pages.push(`**Music Commands [${client.musicCommands.size}]**\n\n${'`'+client.musicCommands.map(c=>c.help.name).join('` `')+'`'}`)
							}
              							if(client.roleplayCommands){
							pages.push(`**Roleplay Commands [${client.roleplayCommands.size}]**\n\n${'`'+client.roleplayCommands.map(c=>c.help.name).join('` `')+'`'}`)
							}
						};
            let page = 1;
						check();//adds pages, adds commands
            const embed = new Discord.MessageEmbed()
            .setColor(`${message.member.displayHexColor}`)
  					.setTimestamp()
            .setAuthor(`help for ${client.user.username}`,client.user.displayAvatarURL)
            .setDescription(pages[page-1])
            .setFooter(`${page}/${pages.length}`)
            message.channel.send(embed).then(async msg => {
              const reaction1 = await msg.react('⏪');
						  const reaction2 = await msg.react('◀');
              const reaction3 = await msg.react('▶')
              const reaction4 = await msg.react('⏩')
							let i = 0;
						  const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id, {
							time: 600000  //10 minutes
						  });
						  collector.on('collect', r => {
							if (r.emoji.name === '◀') {
							r.users.remove(message.author.id);
                  if(page === 1)return;
                  page--;
                embed.setColor(`${message.member.displayHexColor}`)
								embed.setTimestamp()
								embed.setAuthor(`help for ${client.user.username}`,client.user.displayAvatarURL)
								embed.setDescription(pages[page-1])
								embed.setFooter(`${page}/${pages.length}`)
                msg.edit(embed)
              }
							if(r.emoji.name === '▶') {
							r.users.remove(message.author.id);
								if(page===pages.length)return;
								page++;
								embed.setColor(`${message.member.displayHexColor}`)
								embed.setTimestamp()
								embed.setAuthor(`help for ${client.user.username}`,client.user.displayAvatarURL)
								embed.setDescription(pages[page-1])
								embed.setFooter(`${page}/${pages.length}`)
								msg.edit(embed)
							}
                if(r.emoji.name === '⏩') {
							r.users.remove(message.author.id);
								if(page===pages.length)return;
								page=pages.length;
								embed.setColor(`${message.member.displayHexColor}`)
								embed.setTimestamp()
								embed.setAuthor(`help for ${client.user.username}`,client.user.displayAvatarURL)
								embed.setDescription(pages[page-1])
								embed.setFooter(`${page}/${pages.length}`)
								msg.edit(embed)
							}
                if(r.emoji.name === '⏪'){
                 //Oh i thought they worked?
                  //we had the wrong emotes here
                  r.users.remove(message.author.id);
                  if(page=== 1)return;
                  page=1;
                  embed.setColor(message.member.displayHexColor)
                  embed.setTimestamp()
                  embed.setAuthor(`help for ${client.user.username}`)
                  embed.setDescription(pages[page-1])
                  embed.setFooter(`${page}/${pages.length}`)
								msg.edit(embed)
                }
						  }) //Copy and paste? Lol or do you just handwrite everything out again? 
						  collector.on('end', () => {
	//						msg.reactions.forEach(r => {
	//							r.remove();
							});
						  });
//})
}                  
module.exports.help = {
  name: "help",
  description: "displays a list of commands",
  usage: "==help",
  accessableby: "Members",
  alias: "cmds"
}