const { Client, Events, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, readyClient => {
    console.log('Bot is ready!');
    console.log(`${readyClient.user.tag}`);
    client.user.setActivity('Just Tiggin arround');
});

client.login(process.env.ClientSecret);