const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const { getPost, getImage} = require('random-reddit');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cute')
    .setDescription('show me the cuteness!'),
    async execute(interaction) {
        const image = await getImage(['awww', 'cute', 'pets']);
          console.log(image);
        const cuteEmbed = new EmbedBuilder()
            .setTitle('Awwwww :)')
            .setImage(image)
            .setColor(0x93c54b);

        await interaction.reply({
            embeds: [cuteEmbed],
            ephemeral: true,
        });
    },
};