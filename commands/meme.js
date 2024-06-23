const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Gera um meme aleatório para você!"),

  async execute(interaction) {
    try {
      const fetch = await import("node-fetch").then(mod => mod.default);
      const response = await fetch(
        "https://www.reddit.com/r/dankmemes/top.json?sort=top&t=day&limit=500"
      );
      const { data: { children } } = await response.json();

      const randomMeme = children[Math.floor(Math.random() * children.length)].data;

      const embed = new EmbedBuilder()
        .setTitle(randomMeme.title)
        .setURL(`https://reddit.com${randomMeme.permalink}`)
        .setImage(randomMeme.url)
        .setColor(0x9590ee)
        .setFooter({ text: `👍 ${randomMeme.ups} | 💬 ${randomMeme.num_comments}` });

      await interaction.reply({ embeds: [embed] });

    } catch (error) {
      console.error("Erro ao buscar o meme:", error);
      await interaction.reply("Não foi possível buscar um meme no momento. Tente novamente mais tarde.");
    }
  },
};