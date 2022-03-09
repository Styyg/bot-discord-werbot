module.exports = {
    name: 'no command',
    description: 'Beytoulah',
    async execute(message) {
        if (message.content.includes('<@950098303767441539>') || message.content.includes('<@!950098303767441539>')){
            await message.reply("Beytoulah 💉💉💉")
        }
    }
}