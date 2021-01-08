const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();

    client.imageCommands = new Discord.Collection();
    client.miscCommands = new Discord.Collection();
    client.moderationCommands = new Discord.Collection();
    client.musicCommands = new Discord.Collection();
    client.roleplayCommands = new Discord.Collection();
   client.funCommands = new Discord.Collection();
   // client.currencyCommands = new Discord.Collection(); 
    client.devCommands = new Discord.Collection(); 
    //client.xpCommands = new Discord.Collection();
    //client.nsfwCommands = new Discord.Collection();
  
const imgFiles = await readdir("./commands/Image/");
const miscFiles = await readdir("./commands/Misc/");
const modFiles = await readdir("./commands/Moderation/");
const musicFiles = await readdir("./commands/Music/");
const roleplayFiles = await readdir ("./commands/Roleplay/");
const funFiles = await readdir ("./commands/Fun/"); 
//const curFiles = await readdir ("./commands/Currency/");
const devFiles = await readdir ("./commands/Developers/");
//const xpFiles = await readdir("./commands/XP/");
//const nsfwFiles = await readdir("./commands/NSFW/"); 
  //nsfwFiles.forEach(f => {
  //if (!f.endsWith(".js")) return;
  //let nsfw = require(`../commands/NSFW/${f}`);
  //client.devCommands.set(nsfw.help.name, nsfw);
  //client.commands.set(nsfw.help.name, nsfw);
  //client.aliases.set(nsfw.help.alias, nsfw);
  //});
  devFiles.forEach(f => {
  if (!f.endsWith(".js")) return;
  let dev = require(`../commands/Developers/${f}`);
  client.devCommands.set(dev.help.name, dev);
  client.commands.set(dev.help.name, dev);
  client.aliases.set(dev.help.alias, dev);
  });
 //xpFiles.forEach(f => {
 // if (!f.endsWith(".js")) return;
 // let xp = require(`../commands/XP/${f}`);
 // client.xpCommands.set(xp.help.name, xp);
//  client.commands.set(xp.help.name, xp);
  //client.aliases.set(xp.help.alias, xp);
 // });
//curFiles.forEach(f => {
  //if (!f.endsWith(".js")) return;
  //let cur = require(`../commands/Currency/${f}`);
  //client.currencyCommands.set(cur.help.name, cur);
  //client.commands.set(cur.help.name, cur);
  //client.aliases.set(cur.help.alias, cur);
  //});
funFiles.forEach(f => {
  if (!f.endsWith(".js")) return;
  let fun = require(`../commands/Fun/${f}`);
  client.funCommands.set(fun.help.name, fun);
  client.commands.set(fun.help.name, fun);
  client.aliases.set(fun.help.alias, fun);
  });
roleplayFiles.forEach(f => {
  if (!f.endsWith(".js")) return;
  let role = require(`../commands/Roleplay/${f}`);
  client.roleplayCommands.set(role.help.name, role);
  client.commands.set(role.help.name, role);
  client.aliases.set(role.help.alias, role);
  });
musicFiles.forEach(f => { 
  if (!f.endsWith(".js")) return;
  let mus = require(`../commands/Music/${f}`);
  client.musicCommands.set(mus.help.name, mus);
  client.commands.set(mus.help.name, mus);
  client.aliases.set(mus.help.alias, mus);
  });
imgFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let img = require(`../commands/Image/${f}`);
    client.imageCommands.set(img.help.name, img);
    client.commands.set(img.help.name, img);
	client.aliases.set(img.help.alias, img);
	});
miscFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let misc = require(`../commands/Misc/${f}`);
    client.miscCommands.set(misc.help.name, misc);
    client.commands.set(misc.help.name, misc);
	client.aliases.set(misc.help.alias, misc);
	});
modFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let mod = require(`../commands/Moderation/${f}`);
    client.moderationCommands.set(mod.help.name, mod);
    client.commands.set(mod.help.name, mod);
	client.aliases.set(mod.help.alias, mod);
	});
console.log(`Glitch has loaded ${client.commands.size} commands`);
console.log(`and ${client.aliases.size} aliases for Dove`);
}