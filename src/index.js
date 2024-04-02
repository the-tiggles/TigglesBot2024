const { Client, Events, IntentsBitField, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const bot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
var fs = require('fs');

// bot.commands = bot.Collection();

// fs.readdir('./commands/', (err, files) => {
// if (err) console.log(err);
// // 'f' is for file
// let jsfile = files.filter(f => f.split('.').pop() === 'js');
// if (jsfile.length <= 0) {
//   console.log('could not find commands');
//   return;
// }
// console.group('commands');
// jsfile.forEach((f, i) => {
//   let props = require(`./commands/${f}`);
//   console.log(`${f}`);
//   bot.commands.set(props.help.name, props);
// });
// console.groupEnd();
// });


bot.once(Events.ClientReady, readyClient => {
    console.log('✅ Bot is ready!');
    console.log(`${readyClient.user.tag}`);
    bot.user.setActivity('love games');
});

bot.on('messageCreate', (message) => {
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

// Set with Koyeb Secrets
bot.login(process.env.ClientToken);