const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  // !cute

  let { body } = await superagent.get(`https://www.reddit.com/r/aww.json`);
  var cuteEmbed = getImage(body);
  function getImage(body) {
    var randIMG = body.data.children[Math.floor(Math.random() * body.data.children.length)].data.url;

    if ((randIMG.includes("i.redd")) || (randIMG.includes("i.imgur"))) {
      console.log("found this " + randIMG);
      message.channel.send("cute :heart_eyes: " + randIMG);

    } else {
      console.log("this isnt what i want, lets try again");
      return getImage(body);
    }
  }
}

module.exports.help = {
  name: "cute"
}