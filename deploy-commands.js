const { REST, Routes, Client } = require("discord.js");

// Verificando .dotenv
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, CLIENT_ID } = process.env;

// Importação dos comandos do BOT
const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

const commands = [];

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (command.data) {
    commands.push(command.data.toJSON());
  }
}

// Instância REST
const rest = new REST({ version: "10" }).setToken(TOKEN);

// deploy
(async () => {
  try {
    console.log(`Registrando ${commands.length} comandos globalmente...`);

    // PUT
    const data = await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    );
    
    console.log(
      `Comandos registrados globalmente com sucesso.`
    );
  } catch (error) {
    console.error(error);
  }
})();
