module.exports = {
    name: 'salut',
    description: 'Salut Werbo',
    async execute(message) {
        let args = message.content.trim().split(" ")
        if(args.length > 1)
            if(args[1].toLowerCase().startsWith('werbo'))
                await message.channel.send("Salut Werbo")
        // else
            // return true
    }
}