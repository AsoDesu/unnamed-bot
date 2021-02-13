import 'dotenv/config'
import Discord from 'discord.js'
const client = new Discord.Client()

import addUser from './commands/addUser/addUser'
import removeUser from './commands/removeUser/removeUser'
import getUser from './commands/getUser/getUser'
import HELP from './commands/help/help'
import link from './commands/link/linkTwitch'
import neko from './commands/neko'
import createRR from './commands/ReactionRoles/create'
import removeRR from './commands/ReactionRoles/remove'

// Moduels
import userLeave from './modules/userLeave'
import userJoin from './modules/userJoin'
import packetRecived from './modules/packetRecived'
import botLog from './modules/botLog'

client.on('message', async (msg: Discord.Message) => {
    if (msg.author.bot) return

    if (!msg.guild) { return; }

    const args = msg.content.toLowerCase().slice(process.env.PREFIX.length).split(/ +/)
    const command = args.shift().toLowerCase()
    switch (command) {
        case 'help': HELP(msg, args); return;
        case 'add': addUser(msg, args); return;
        case 'remove': removeUser(msg, args); return;
        case 'user': getUser(msg, args); return;
        case 'link': link(msg, args); return;
        case 'neko': neko(msg, args); return;
        case 'createrr': createRR(msg, args); return
        case 'removerr': removeRR(msg, args); return
    }
    // case '': ; return;
})

function getClient() {
    return client
}

client.on('ready', () => {
    console.log('Connected to Discord')
    botLog('Connected to discord', client, __filename)
    client.user.setActivity('in a tourney')
})

client.on('guildMemberAdd', userJoin)

client.on('guildMemberRemove', userLeave)

client.on('raw', (d) => { packetRecived(d, client) })

client.login(process.env.TOKEN)

// Express stuff

import Express from 'express'
const app = Express()

app.use(Express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Aso was ere!')
})

app.listen(process.env.PORT)

export default {
    getClient
}