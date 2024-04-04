const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
// const {getImage} = require('random-reddit');
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fetch = require('node-fetch');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('cute')
    .setDescription('show me the cuteness!'),
    async execute(interaction) {
        // const image = await getImage(['awww', 'cute', 'pets']);
        const url = await fetch("https://www.reddit.com/r/awww/random/.json");
        const random = await url.json();
        if (random[0].data.children[0].data.is_video == true) {
          console.log('it is a video');
          const theMedia = random[0].data.children[0].data.secure_media.reddit_video.fallback_url;
          await interaction.reply({
            content: `${random[0].data.children[0].data.title}\n${theMedia}`,
          });
        }
        else {
          console.log('it is not a video');
          const theMedia = random[0].data.children[0].data.url;
          await interaction.reply({
            content: `${random[0].data.children[0].data.title}\n${theMedia}`,
          });
        }
    },
};