// Importando itens necessários
const { ActivityType, Activity } = require('discord.js');
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// Verificando o .dotenv
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// Criando const importantes
const fs = require("node:fs");
const { type } = require('node:os');
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`Esse comando em ${filePath} está com "data" ou "execute ausentes"!`)
    }
}
console.log(client.commands);


// Parte de login do BOT
let status = [
    {
       name: "conteúdo RED PILL",
       type: ActivityType.Streaming,
       url: '', 
    },
    {
        name: "Sendo cada vez mais chad",
        type: ActivityType.Playing, 
     },
     {
        name: "Transcendent 🔱",
        type: ActivityType.Playing, 
     },
     {
        name: "Quem cultiva respeito colhe admiração.",
        type: ActivityType.Watching, 
     },
     {
        name: '"Não adianta ter as melhores qualidades do mundo e carrega-las consigo, e demonstrar para as pessoas apenas seus defeitos"',
        type: ActivityType.Custom_Status, 
     },
];

client.once(Events.ClientReady, c => {
	console.log(`O BOT "${c.user.tag}" está online!`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
});
// Confirmando TOKEN
client.login(TOKEN);


// Listener de interações com o BOT
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand() ) return
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        console.error("Comando não encontrado");
        return
    }
    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply("Houve um erro ao executar esse comando.");
    }   
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
  
    let mencoes = [`<@${client.user.id}>`, `<@!${client.user.id}>`]
    console.log(`${client.user.name} mencionou o bot.`);

    mencoes.forEach(element => {
      if (message.content === element) {
        
  
        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynaimc: true }) })
        .setDescription(`🛠 Olá ${message.author}, utilize \`/help\` para ver meus comandos!`)
        
        message.reply({ embeds: [embed] })
      } else { console.log("Deu ruim.") }
    })
  console.log("teste");
  })
