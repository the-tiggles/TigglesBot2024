const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const redditParse = require('redditparse');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cute')
    .setDescription('show me the cuteness!'),
    async execute(interaction) {
        const result = await redditParse.randomPost('cats');
        let resultObject;
        do {
            resultObject = JSON.parse(result);
        } while (resultObject.type != 'image')
        console.log(resultObject);
        const kittenEmbed = new EmbedBuilder()
            .setTitle(resultObject.title)
            .setImage(resultObject.image)
            .setColor(0x93c54b);

        await interaction.reply({
            embeds: [kittenEmbed],
            ephemeral: true,

        });
    },
};