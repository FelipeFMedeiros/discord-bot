// Importando itens necessários
const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {

  // Configurando o SlahCommand
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Mostra informações e avatar do usuário.")
    .addUserOption((option) =>
      option
        .setName("usuário")
        .setDescription("Mencione um usuário.")
        .setRequired(true)
    ),
  
  async execute(interaction) {
    let user = interaction.options.getUser("usuário");
    let data_conta = user.createdAt.toLocaleString();
    let id = user.id;
    let tag = user.tag;
    let is_bot = user.bot;

    // Verificando se o usuário é um bot
    if (is_bot === true) is_bot = "Sim";
    if (is_bot === false) is_bot = "Não";

    // Criando embed
    let embed = new EmbedBuilder()
      .setColor("Random")
      .setAuthor({
        name: user.username,
        iconURL: user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        user
          .displayAvatarURL({ size: 2048, dynamic: true })
          .replace(".webp", ".png")
          .replace(".webm", ".gif")
      )
      .setTitle("Informações do usuário:")
      .setFields(
        {
          name: `📕 Nome:`,
          value: `\`${tag}\``,
          inline: false,
        },
        {
          name: `🆔 ID:`,
          value: `\`${id}\``,
          inline: false,
        },
        {
          name: `📅 Criação da conta:`,
          value: `\`${data_conta}\``,
          inline: false,
        },
        {
          name: `🤖 É um bot?`,
          value: `\`${is_bot}\``,
          inline: false,
        }
      );

    // Botão para ir para o link da foto do usuário
    let botao = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setURL(
          user
            .displayAvatarURL({ size: 4096, dynamic: true })
            .replace(".webp", ".png")
            .replace(".webm", ".gif")
        )
        .setEmoji("📎")
        .setStyle(ButtonStyle.Link)
        .setLabel(` Avatar de ${user.username}`)
    );
    // Mandando a mensagem
    interaction.reply({ embeds: [embed], components: [botao] });
  },
};
