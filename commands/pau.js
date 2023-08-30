// Importando itens necessários
const { SlashCommandBuilder, EmbedBuilder, Message, Client, interaction } = require('discord.js');

let centimetros = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"
];

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
        .setDescription("Fala quantos cm de pau você tem."),

    async execute(interaction) {
        // Escolhendo centímetros
        let calcCentimetros = Math.floor(Math.random() * centimetros.length);
        let randomCentimetros = centimetros[calcCentimetros];
        // Escolhendo elogios
        let calcElogio = Math.floor(Math.random() * elogio.length);
        let randomElogio = elogio[calcElogio];

        const user = interaction.member.user;

        if (randomCentimetros === 1) {
            await interaction.reply(`${user} tem **${randomElogio} ${randomCentimetros}** centímetro`);
        } else {
            await interaction.reply(`${user} tem **${randomElogio} ${randomCentimetros}** centímetros`);
        }
    }
}
