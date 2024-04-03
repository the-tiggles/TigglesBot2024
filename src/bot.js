const { Client, Collection, Events, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();
client.commandArray = [];
var fs = require('fs');


const functionFolders = fs.readdirSync('./src/functions');

for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js'));
    for (const file of functionFiles)
      require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();

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


client.once(Events.ClientReady, readyClient => {
    console.log('✅ Bot is ready!');
    console.log(`${readyClient.user.tag}`);
    client.user.setActivity('thug stuff 2');
});

// client.on('messageCreate', (message) => {
//   console.log(`${message.content}`);
//   if (message.author.bot) return;
//   if (message.content === 'ping') {
//     message.reply('pong');
//   }
//   if (message.content === 'hello') {
//     message.reply('hello :)');
//   }
// });


// client.login(process.env.TOKEN);

// Set with Koyeb Secrets
client.login(process.env.ClientToken);