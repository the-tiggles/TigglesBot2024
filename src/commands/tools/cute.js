const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const superagent = require('superagent');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cute')
    .setDescription('show me the cuteness!'),
    async execute(interaction) {
        getCuteImage();
        function getCuteImage() {
            let resultObject;
            do {
                const result = await redditParse.randomPost('cats');
                resultObject = JSON.parse(result);
            } while (resultObject.type != "image")
            console.log(resultObject);
            const kittenEmbed = new EmbedBuilder()
                .setTitle(resultObject.title)
                .setImage(resultObject.image)
                .setColor(0x93c54b)
            interaction.reply({
                embeds: [kittenEmbed],
            })
        }
    },
};