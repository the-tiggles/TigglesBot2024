const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require('fs');

const theToken = process.env.ClientToken;

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync('./src/commands');
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith('.js'));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`Command: ${command.data.name} has been loaded!`);
      }
    }
    const clientId = '464785300221329418';
    const guildId = '333412513385545728';
    const rest = new REST({ version: '10' }).setToken(theToken);


    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
          body: client.commandArray,
      });

      console.log('Successfully reloaded application (/) commands.');
    }
    catch (error) {
      console.error(error);
    }
  };
};