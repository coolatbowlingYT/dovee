const Discord = require('discord.js');
module.exports.run = async (client,message,args) => {
const embed = new Discord.MessageEmbed() 
.setTitle(`**DO THE FIVE**`)
.setThumbnail(`https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2Fdownload.gif?v=1584942243195`)
.addField('**Help stop coronavirus**','\u200b')
.addField('__________________________________','\u200b')
.addField('**1: HANDS** Wash them often','\u200b')
.addField('**2: ELBOW** Cough into it','\u200b')
.addField('**3: FACE**  Dont touch it','\u200b')
.addField('**4: SPACE** Keep safe distance','\u200b')
.addField('**5: HOME**  Stay if you can','\u200b')
 message.channel.send(embed)
// Now we await it.
  
  };
// Make sure you return it, this usually implies if you are using this inside a function.


module.exports.help = {
    name: "prevent"
};