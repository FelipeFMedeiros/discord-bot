const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    Client,
    Message
  } = require("discord.js");
  
  
  module.exports = {
  
      // Configurando SlashCommand
      data: new SlashCommandBuilder()
      .setName("meme")
      .setDescription("Gera um meme aleatório para você!"),
  
    async execute(interaction) {
      const {
        data: { children },
      } = await fetch(
        "https://www.reddit.com/r/dankmemes/top.json?sort=top&t=day&limit=500"
      ).then((res) => res.json());
      const meme = this.Client.utils.random(children).data;
      console.log(meme);
  
      const embed = new EmbedBuilder()
        .setTitle(meme.title)
        .setImage(meme.url)
        .setColor(0x9590ee)
        .setAuthor(interaction.author.tag, interaction.author.displayAvatarURL({ size: 64 }))
        .setFooter(`👍 ${meme.ups} | 👎 ${meme.downs}`);
      return interaction.reply({ embed });
    },
  };