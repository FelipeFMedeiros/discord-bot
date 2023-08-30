// Importando itens necessários
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Construção da Embed
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Comandos do GIT')
	.setURL('https://github.com/FelipeFMedeiros')
	.setAuthor({ name: 'Negromorfo', iconURL: 'https://img001.prntscr.com/file/img001/PEqNnLmMRZe9WxDLsC09pQ.jpeg', url: 'https://github.com/FelipeFMedeiros' })
	.setDescription('Relembrar comandos do git.')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


// Execução do comando
module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do git!"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] });
    }
}