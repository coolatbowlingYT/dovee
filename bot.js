const Discord = require("discord.js");
const { Util } = require("discord.js");
const fs = require("fs");
const { token } = require("./config.js");
const prefixes = require("./jsons/prefixes.json");
//const api = require("nekos-moosik");
//const ytdl = require("ytdl-core");

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
const client = new Discord.Client();
//client.music = new api.musicClient(process.env.YTKEY, client, {
  //anyoneCanPause: true, //this defaults to false
//  leaveOnStop: true, //this defaults to true
  //leaveIfAlone: true, //this defaults to true
  //messageNewSong: true //this defaults to true
//});
require("./util/cmdloader.js")(client);
//command loader's there^ , no need for 2
//require('./util/levelSystem.js')(client);
//level system is there^

client.on("ready", () => {
  console.log(`${client.user.username} is online`);
  client.user.setActivity(`my master get back into coding`, {
    type: "WATCHING"
  });
});
client.on("message", message => {
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: "=="
    };
  }
  const prefix = "==";

  if (message.content === "!prefix")
    return message.channel.send(
      "The prefix for this server is: ``" + prefix + "``"
    );

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  let alias = client.aliases.get(cmd.slice(prefix.length));
  if (commandfile) {
    commandfile.run(client, message, args);
  }
  if (alias) {
    alias.run(client, message, args);
  }
});
client.login(process.env.TOKEN);
