const { Client, Events, IntentsBitField, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
const core = require('@actions/core');
const theToken = core.getInput('TOKEN');

client.once(Events.ClientReady, readyClient => {
    console.log('✅ Bot is ready!');
    console.log(`${readyClient.user.tag}`);
    client.user.setActivity('love games');
});

client.on('messageCreate', (message) => {
  console.log(`${message.content}`);
  if (message.author.bot) return;
  if (message.content === 'ping') {
    message.reply('pong');
  }
  if (message.content === 'hello') {
    message.reply('hello :)');
  }
});


// client.login(process.env.TOKEN);

client.login(process.env.ClientToken);