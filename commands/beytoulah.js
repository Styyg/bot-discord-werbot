const life = "\"Beytoulah est le serviteur du Dieu et jardinier du palais de Dieu. Il voyage à travers le monde à l'aide d'un tapis volant. \n" +
            "C'est un expert en arts-martiaux puisqu'il les enseigne à ses élèves pour qu'ils puissent faire face à de puissants ennemis. C'est un génie qui vit depuis plus d'un siècle. " +
            "Il a servi le Dieu précédent et les tuteurs Terriens avant Dieu. Il aide à reconstruire Werboland en cas de nécessité puisque c'est le créateur de la maquette. " +
            "Beytoulah est beaucoup plus puissant que werbo lors de leur 1ère rencontre, et c'est lui qui se charge de son entraînement après la mort d'Elessar.\n\n" +
            "Il est de petite taille, et a la peau noire foncée, de grands yeux ronds inexpressifs et de grosses lèvres rouges. Il est habillé avec des vêtements traditionnels indiens, " +
            "c'est à dire un gilet sans manches, des bracelets dorés, d'un pantalon bouffant blanc et des chaussures semblables à des babouches. Comme Kuririn, il ne possède pas de nez. " +
            "D'apparence, Beytoulah ressemble à un génie traditionnel du folklore maghrébin.\n\n" +
            "C'est mine de rien un puissant combattant, il parvient à infliger une sévère leçon à Werbo qui venait de vaincre Elessar. L'entrainement de Beytoulah est parmi l'un des plus " +
            "sévères du manga et probablement l'un des plus profonds. Ainsi grâce à ses compétences, Werbo parvient à effacer sa présence. On peut même dire que cette compétence qui ennuiera " +
            "tant les SEL des RuSh et des hommes de mains de Rui.\""

module.exports = {
    name: 'beytoulah',
    description: 'Beytoulah',
    async execute(message) {
        let args = message.content.trim().split(" ")
        if(args.length > 1)
            if(args[1].toLowerCase().startsWith('life'))
                await message.channel.send(life)
    }
}