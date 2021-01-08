const Discord = require("discord.js");
const fs = require('fs');
const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var years = Math.floor(days/365); days %= 365;
    var decades = Math.floor(years/10); years %= 10;
    var centuries = Math.floor(decades/10); decades %= 10;
    var written = false;
    return(centuries?(written=true,`${centuries === 1 ? centuries+" Century" : centuries+" Centuries"}`):"")+(written?", ":"")
      +(decades?(written=true,`${decades == 1 ? decades+" Decade" : decades+" Decades"}`):"")+(written?", ":"")
      +(years?(written=true,`${years === 1 ? years+" Year" : years+" Years"}`):"")+(written?", ":"")
      +(days?(written=true,`${days === 1 ? days+" Day" : days+" Days"}`):"")+(written?", ":"")
      +(hours?(written=true,`${hours == 1 ? hours+" Hour" : hours+" Hours"}`):"")+(written?", ":"")
      +(minutes?(written=true,`${minutes === 1 ? minutes+" Minute" : minutes+" Minutes"}`):"")+(written?", ":"")
      +(seconds?(written=true,`${seconds === 1 ? seconds+" Second" : seconds+" Seconds"}`):"")+(written?" ":"");
};
function map(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
if(r<0||r>255)r=0;
if(g<0||r>255)g=0;
if(b<0||r>255)b=0;
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
let randomHex = function(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
 };
function generateKey(length) {
    const tokens = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789._-=+';
    let keyOut = '';
    for (let i = 0; i < length; i++) {
			const random = Math.floor((Math.random() * 65) + 1);
			const char = tokens.charAt(random);
			keyOut += char;
	}
    return keyOut;
}
let f2c = function(num) {
return (num +'°F = '+ Math.round(((num-32)*5)/9) +'°C');
};
function generateNumber(length) { 
return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1)); 
};
const longify = require('nekos-longify-function');

module.exports.run = async (client,message,args) => {
if(message.author.id !== '477273408460292123' && message.author.id !== '377271843502948354')return;
try{
      const code = message.content.split(" ").slice(1).join(" ");
      if(!code)return message.channel.send('i *do* need smth to eval, right?');
      let evaled = eval(code);

      if(typeof evaled !== "string")
        evaled = require("util").inspect(evaled, { depth: 0 });
	
if(evaled.length > 1024){
fs.writeFile("./output.txt",(evaled), (err) => {
if (err) console.log(err)
});
return message.channel.send('ayy ... the output was longer than 1024 in length, so i put it in this file ... yw',{file: './output.txt'});
};
	
    //if(code.includes('client.token'))return;
    
	
     let evbed = new Discord.MessageEmbed()
     .setTimestamp()
     .setColor(randomHex())
     .addField('**Input:**', '```js\n'+ code +'```')
	 .addField('**Output:**', '```js\n'+ evaled +'```')
      message.channel.send({embed: evbed});
    
	} catch (err) {
    let errbed = new Discord.MessageEmbed()
    .setColor(0xff0000)
	.setTimestamp()
	.addField('**Error:**', '```js\n'+ err +'```')
    message.channel.send({embed: errbed});
    }


}
module.exports.help = {
    name: "eval",
    alias: "evaluate",
    type: "Master",
    info: "Evaluates code",
    perms: "BOT_OWNER",
    useage: "<code>"
  }