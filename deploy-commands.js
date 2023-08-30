const { REST, Routes, Client } = require("discord.js");

// Verificando .dotenv
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

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
    console.log(`Resentando ${commands.length} comandos...`);

    // PUT
    const data = await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands }
    );

    const serverId = GUILD_ID;
    if (serverId === "615626660162568195") {
      const serverName = "F3L1PECS";
      console.log(
        `Servidor: ${serverName}`
      );
    } else if (serverId === "1048446248467824640") {
      const serverName = "TRANSCENDENT 🔱";
      console.log(
        `Servidor: ${serverName}`
      );
    }
    
    console.log(
      `Comandos registrados com sucesso em: (${serverId})`
    );
  } catch (error) {
    console.error(error);
  }
})();
