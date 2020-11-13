const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  console.log('bot is connected...');
});

client.on('message', msg => {
  if (msg.channel.id === '776449477757632535' && msg.content === 'naber') {
    // reply with mention
    msg.reply('iyilik, senden?');

    // reply without mention
    // msg.channel.send('')
  }
});
