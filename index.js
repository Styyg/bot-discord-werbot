const fs = require('fs');
// Require the necessary discord.js classes
const {Client, Collection, Intents} = require('discord.js');

// To get environment variable from .env file (e.g. TOKEN)
require('dotenv').config()

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

// Create a new client instance
const client = new Client({intents: myIntents});
// const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// const PREFIX = "!"
const PREFIX = ""

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`Connecté en tant que ${ client.user.tag}`);
    // client.user.setAvatar('./assets/images/gaspar-ventura-popo.jpg');
});

client.on("messageCreate", async message => {
    
    if(message.author.bot || !message.content.startsWith(PREFIX)) return;
    
    const args = message.content.trim().slice(PREFIX.length).split(" ") 
    const commandName = args.shift().toLowerCase()

    // console.log('commandName : ' + commandName)
    
    // If client hasn't the command it does nothing
    if (client.commands.has(commandName)){
        // console.log(commandName + ' introuvable')
        console.log('if : ' + commandName)
        try {
            await client.commands.get(commandName).execute(message);
        } catch (error) {
            console.error(error);
            await message.reply('There was an error while executing this command!');
        }
    } else {
        const command = require(`./commands2/no command.js`);
        command.execute(message);
    }

    // return
})

// Login to Discord with your client's token
client.login(process.env.TOKEN) 