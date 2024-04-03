module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`✅ Bot is ready! ${client.user.tag} is logged in and online.`);
    client.user.setActivity('the thuggest v2');
  },
};