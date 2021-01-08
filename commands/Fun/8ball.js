let discord = require('discord.js');

let map = new Map([
  [0,'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.45.37%20AM.png?1550843257450'],
  [1,'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.46.07%20AM.png?1550843294441'], 
  [2,'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.47.17%20AM.png?1550843322480'], 
  [3,'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.50.20%20AM.png?1550843438413'],
  [4,'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.51.22%20AM.png?1550843496715'],
  [5,'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.52.58%20AM.png?1550843592235'], 
  [6, 'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.55.36%20AM.png?1550843776010'], 
  [7, 'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-02-22%20at%205.57.19%20AM.png?1550843859509'],
  [8, 'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202019-03-21%20at%209.02.06%20PM.png?1553227365592'], 
  [9, 'https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2FScreenshot%202020-03-11%20at%209.08.09%20PM.png?v=1583986109815'],
  [10, 'https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2FScreenshot%202020-08-14%20at%205.21.08%20PM.png?v=1597450896231'], 
  [11, 'https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2FScreenshot%202020-08-18%20at%207.35.05%20AM.png?v=1597761324278'], 
  [12, 'https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2FScreenshot%202020-08-18%20at%207.37.40%20AM.png?v=1597761478231'], 
  [13, 'https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2FScreenshot%202020-08-18%20at%207.38.55%20AM.png?v=1597761585819'], 
  [14, 'https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2FScreenshot%202020-08-18%20at%207.41.17%20AM.png?v=1597761719492'],
  [15, 'https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2FScreenshot%202020-08-18%20at%207.42.54%20AM.png?v=1597761797518'],
  [16, 'https://cdn.glitch.com/b6e7d430-1d8d-447e-ac85-b524e449f60f%2FScreenshot%202020-08-18%20at%207.42.54%20AM.png?v=1597761797518']
]); 

module.exports.run = (client,message) => {
  let shakingembed = new discord.MessageEmbed()
  .setTitle('🎱Shaking...🎱')
  .setColor('Random')
  .setImage(`https://cdn.glitch.com/8f71b74a-8ae6-4130-bbcb-228cf06489c5%2F8ball-gif.gif?1550841709262`)
  message.channel.send(shakingembed).then(m => {
  setTimeout(function(){
let question = message.content.split(' ').slice(1).join(' ');
let num = Math.round(Math.random() * 16);
console.log(num);
let img = map.get(num);
let ballembed = new discord.MessageEmbed()
.setTitle('Magic 8 Ball:')
.addField('**Question:**',question)
.addField('  **Answer:**',"󠀀󠀀󠀀󠀀󠀀󠀀󠀀")
.setImage(img)
.setFooter('8 ball is always right.. No doubt.')
m.edit(ballembed)
  },3000)
})

}
module.exports.help = {
name: "8ball",
alias: "8Ball"
}