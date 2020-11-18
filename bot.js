const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  console.log('bot is connected...');
});

const PREFIX = '$';

client.on('message', async msg => {
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
    } else if (CMD_NAME === 'ban') {
      if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.reply('You do not have permissions to use that command');
      }
      if (args.length === 0) return message.reply('Please provide an ID');

      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send('User was banned successfully');
      } catch (err) {
        message.channel.send(
          'An error occured. Either I do not have permissions or the user was not found.'
        );
      }
    }
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.add('738664659103776818');
        break;
      case '🍌':
        member.roles.add('738664632838782998');
        break;
      case '🍇':
        member.roles.add('738664618511171634');
        break;
      case '🍑':
        member.roles.add('738664590178779167');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.remove('738664659103776818');
        break;
      case '🍌':
        member.roles.remove('738664632838782998');
        break;
      case '🍇':
        member.roles.remove('738664618511171634');
        break;
      case '🍑':
        member.roles.remove('738664590178779167');
        break;
    }
  }
});
