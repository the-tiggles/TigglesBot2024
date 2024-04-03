const { SlashCommandBuilder } = require('discord.js');
const superagent = require('superagent');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cute')
    .setDescription('show me the cuteness!'),
    async execute(interaction, client) {
      const message = await interaction.deferReply({
        fetchReply: true,
      });
      const { body } = await superagent.get('https://www.reddit.com/r/aww.json');
      function getImage() {

        var randIMG = body.data.children[Math.floor(Math.random() * body.data.children.length)].data.url;

        if ((randIMG.includes('i.redd')) || (randIMG.includes('i.imgur'))) {
            console.log('found this ' + randIMG);
            message.channel.send('cute :heart_eyes: ' + randIMG);
        }
        else {
            console.log('this is not what i want - let us try again');
            return getImage(body);
        }
      }
      await interaction.editReply({
        content: getImage(body),
      });
    },
};