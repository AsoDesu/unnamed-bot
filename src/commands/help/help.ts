import { Message, MessageEmbed, MessageReaction, User } from "discord.js";
// Non-Printing Invisible Character "᲼" (not a space)

var helpEmbed1 = new MessageEmbed({
    "title": "Profile Commands (1/2)",
    "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/580425653325791272/a_cb9cbe6eb02eb68508a3d6fde0211b69.png",
        "text": "Created by Aso#0001 <3"
    },
    "fields": [
        {
            "name": ">add {scoresaber link}",
            "value": "Link your scoresaber to your discord!",
        },
        {
            "name": ">user {user}",
            "value": "Get the profile of a user",
        },
        {
            "name": ">link (twitch | birthday | color | status) {argument}",
            "value": "Links data to your profile!"
        },
    ]
})

var helpEmbed4 = new MessageEmbed({
    "title": "Info Commands (2/2)",
    "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/580425653325791272/a_cb9cbe6eb02eb68508a3d6fde0211b69.png",
        "text": "Created by Aso#0001 <3"
    },
    "fields": [
        {
            "name": ">dev",
            "value": "Shows the developer of this very dumb bot"
        },
        {
            "name": ">help",
            "value": "Shows this menu",
        }
    ]
})

async function command(msg: Message, args: string[]) {
    var sentMsg = await msg.channel.send(helpEmbed1)
    var page = 1

    sentMsg.react('⬅️')
    sentMsg.react('➡️')

    // Reaction filter (Only the two emotes and only the user who did the command)
    const filter = (reaction: MessageReaction, user: User) => {
        return (reaction.emoji.name === '⬅️') || (reaction.emoji.name === '➡️') && !user.bot
    }
    // Create collector
    var rpCollector = sentMsg.createReactionCollector(filter, { time: 60000 })
    // Someone reacted
    rpCollector.on('collect', (reaction: MessageReaction, user: User) => {
        // Ignore the bots own reactions
        if (user.bot) return
        // If the reaction is previous page and they are not on the first page
        if (reaction.emoji.name == '⬅️' && !(page == 1)) {
            page = page - 1
            sentMsg.edit(getEmbed(page))

            reaction.users.remove(user.id)

            return;
            // If the reaction is next page, and they are not on the last page
        } else if (reaction.emoji.name == '➡️' && !(page == 2)) {
            page = page + 1
            sentMsg.edit(getEmbed(page))

            reaction.users.remove(user.id)

            return
        }
    })
}

function getEmbed(page: number) {
    switch (page) {
        case 1:
            return helpEmbed1
        case 2:
            return helpEmbed4
    }
}

export default command