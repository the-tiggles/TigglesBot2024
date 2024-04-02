const { Client, Events, IntentsBitField, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.once(Events.ClientReady, readyClient => {
    console.log('Bot is ready!');
    console.log(`${readyClient.user.tag}`);
    client.user.setActivity('Just Tiggin arround');
});

client.login(process.env.ClientToken);