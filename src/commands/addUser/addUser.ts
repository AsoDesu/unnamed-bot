import { Message } from 'discord.js'
import scoresaber from '../../scoresaberApiGrabber'
import addUserToDatabase from './addMemberToDatabase'

import hypixel from '../../hypixel-api/hypixelApiGrabber'

async function command(msg: Message, args: string[]) {
    if (!args[0]) {
        msg.reply('Usage: `>add {scoresaber link here}`');
        return;
    }
    var parsedUrl = parseScoreSaberLink(args[0])
    if (!parsedUrl) {
        if (!hypixel.PlayerDoesExist(args[0])) {
            msg.reply('That is not a valid scoresaber url, or minecraft name.')
            return;
        }
        addUserToDatabase(msg, args[0], true)
    } else {
        var player = await scoresaber(parsedUrl)
        if (!player) {
            msg.reply('That user does not exist')
            return;
        }
        addUserToDatabase(msg, parsedUrl, false)
    }

    function parseScoreSaberLink(url: string) {
        if (url.includes('scoresaber.com/u')) {
            var playerUid = url.split('u/')
            return playerUid[playerUid.length - 1];
        } else {
            return false;
        }
    }
}

export default command