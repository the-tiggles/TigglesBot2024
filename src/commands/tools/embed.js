const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed.'),
    async execute(interaction, client) {
      const embed = new EmbedBuilder()
        .setTitle('This is a new EmbED!')
        .setDescription('This is a unique description')
        .setColor('0x9803fc')
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            url: `https://github.com/the-tiggles/TigglesBot2024`,
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag,
        })
        .setFields()
        .setURL('https://github.com/the-tiggles/TigglesBot2024')
        .addFields([
            {
                name: `Field 1`,
                value: `Field Value 1`,
                inline: true,
            },
            {
                name: `Field 2`,
                value: `Field Value 2`,
                inline: true,
            }
        ]);
        await interaction.reply({
            embeds: [embed],
        });
    },
};