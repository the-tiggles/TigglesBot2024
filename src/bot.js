const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync('./src/functions');

for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js'));
    for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();


// client.once(Events.ClientReady, readyClient => {
//     console.log('✅ Bot is ready!');
//     console.log(`${readyClient.user.tag}`);
//     client.user.setActivity('thug stuff 3');
// });

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

// Set with Koyeb Secrets
client.login(process.env.ClientToken);