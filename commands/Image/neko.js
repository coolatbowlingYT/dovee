const discord = require("discord.js");
const { get } = require('snekfetch');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

module.exports = {
	path: '../../commands/Image/neko.js',
	help: {
		name: 'neko',
		aliases: ['nekoo'],
		enabled: true,
		guildOnly: true,
		permLevel: 0,
		category: 'Image',
		description: 'shows a pic of neko gurl from the new cdn',
		usage: 'neko'
	},
	run: async (client, message) => {
    const { body } = await get("https://nekobottm-site.glitch.me/i/r/neko");
    let link = `https://nekobottm-site.glitch.me/${body.path.replace('/i/','')}`;

      let embed = new discord.MessageEmbed()
		  .setTitle('here\'s a neko mhm')
		  .setColor(message.member.displayHexColor == "#000000" ? "#00ffff" : message.member.displayHexColor)
      .addField('Pic Info:', `Size: \`${body.size}\``)
		  .setImage(link)
		  await message.channel.send(embed);
	}
}