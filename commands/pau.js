// Importando itens necessários
const { SlashCommandBuilder } = require('discord.js');

let elogio = [
    "agressivos",
    "cruéis",
    "incompetentes",
    "tímidos",
    "ardentes",
    "míseros",
    "somente",
    "apenas",
    "lindos",
    "incríveis",
    "agradáveis",
    "maravilhosos",
    "belos",
    "lendários",
    "amáveis",
    "benditos",
    "educados",
    "divertidos",
    "gostosos",
    "eficientes",
    "empolgantes",
    "extraordinários",
    "engraçados",
    "falsos",
    "irresistíveis",
    "ideais",
    "impecáveis",
    "serenos",
    "sutis",
    "toleráveis",
    "virtuosos"
];

// Execução do comando
module.exports = {
    data: new SlashCommandBuilder()
        .setName("pau")
        .setDescription("Verifica quantos centímetros de pau você tem.")
        .addUserOption(option =>
            option.setName("user")
                .setDescription("Usuário que você quer saber o tamanho do pau.")
                .setRequired(false)),

    async execute(interaction) {
        // Escolhendo centímetros
        let randomCentimetros = Math.floor(Math.random() * 45) + 1;
        // Escolhendo elogios
        let calcElogio = Math.floor(Math.random() * elogio.length);
        let randomElogio = elogio[calcElogio];

        // Obtendo o usuário mencionado, ou o próprio usuário se nenhum for mencionado
        const targetUser = interaction.options.getUser('user') || interaction.user;

        // Formando a resposta
        const response = randomCentimetros === 1
            ? `${targetUser} tem **${randomElogio} ${randomCentimetros}** centímetro`
            : `${targetUser} tem **${randomElogio} ${randomCentimetros}** centímetros`;

        // Respondendo à interação
        await interaction.reply(response);
    }
}
