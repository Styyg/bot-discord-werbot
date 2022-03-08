module.exports = {
    name: 'no command',
    description: 'Beytoulah',
    async execute(message) {
        console.log(message.content)
        if (message.content.includes('<@!950098303767441539>'))
            await message.reply("Beytoulah 💉💉💉")
    }
}