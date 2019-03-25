const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`♔الملك♔`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE');
});
client.login(process.env.BOT_TOKEN);
