const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  console.log('bot is connected...');
});

const PREFIX = '$';

client.on('message', msg => {
  if (msg.channel.id === '776449477757632535' && msg.content === 'naber') {
    // reply with mention
    msg.reply('iyilik, senden?');

    // reply without mention
    // msg.channel.send('')
  }

  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === 'kick') {
      if (!message.member.hasPermission('KICK_MEMBERS')) {
        return message.reply('You do not have permissions to use that command');
      }
      if (args.length === 0) return message.reply('Please provide an ID');
      const member = message.guild.members.cache.get(args[0]);
      if (member) {
        member
          .kick()
          .then(member => message.channel.send(`{member} was kicked!`))
          .catch(err => message.channel.send('I do not have permissions :('));
      } else {
        message.channel.send('That member was not found.');
      }
    }
  }
});
