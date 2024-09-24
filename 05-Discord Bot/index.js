const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,],
});


client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply({
        content: "Hello, I'm a Discord bot! How can I help you?"
    })
})

client.login("Token Value")