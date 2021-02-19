import { Message } from "discord.js";

import addInfoToDB from './addInfoToDatabase'
import hypixel from '../../hypixel-api/hypixelApiGrabber'
import scoresaber from '../../scoresaberApiGrabber'
import log from '../../modules/botLog'

async function command(msg: Message, args: string[]) {
    var formattedContent: string;
    switch (args[0]) {
        case 'twitch':
            if (!args[1].includes('twitch.tv/')) { msg.channel.send('Invalid link, make sure to send the full link.'); return; }
            formattedContent = doPogTwitchFormatting(args[1])
            break;
        case 'birthday':
            var parsedDate = doEvenPoggerDateValidationYesBigWords(args[1])
            if (parsedDate != 1) { msg.channel.send('That is not a valid date, make sure to format your date DD/MM.'); return; }
            formattedContent = args[1]
            break;
        case 'color':
            if (!veryPogColourValidation(args[1])) { msg.channel.send('That is not a valid colour.'); return; }
            formattedContent = args[1]
            break;
        case 'status':
            var parsedText = parseStatusText(msg.content)
            if (!parsedText) { msg.channel.send('Must provide a status text, and it must be under 100 characters.'); return; }
            formattedContent = parsedText
            break;
        case 'mc':
            var parsedName = await validateMcName(args[1])
            if (parsedName == null) { msg.channel.send('That Minecraft account couldn\'t be found.'); return; }
            formattedContent = parsedName
            break;
        case 'scoresaber':
            var parsedId = await parseScoreSaberLink(args[1])
            if (!parsedId) { msg.channel.send('That ScoreSaber User couldn\'t be found.'); return; }
            formattedContent = parsedId
            break;
        default:
            msg.channel.send('You can\'t link that yet')
            return;
    }
    msg.channel.send(await addInfoToDB(msg.member.id, args[0], formattedContent))
    log(`${msg.author.username} linked ${args[0]} to their profile`, msg.client, __filename)
}

async function parseScoreSaberLink(url: string) {
    if (url.includes('scoresaber.com/u')) {
        var playerUid = url.split('u/')
        var player = await scoresaber(playerUid[playerUid.length - 1])
        if (!player) {
            return false;
        }
        return playerUid[playerUid.length - 1];
    } else {
        return false;
    }
}

async function validateMcName(name: string) {
    var PlayerDoesExist = await hypixel.PlayerDoesExist(name)
    return (PlayerDoesExist) ? name : null
}

function doPogTwitchFormatting(thing: string) {
    var split = thing.split('/')
    return split[split.length - 1]
}

function doEvenPoggerDateValidationYesBigWords(date: string) {
    // DD/MM
    if (!date) { return NaN }
    var parts: string[] = date.split('/')
    if (parts.length < 2) {
        return NaN
    }
    if ((parseInt(parts[0]) > 31)) {
        return NaN
    }
    if ((parseInt(parts[1]) > 12)) {
        return NaN
    }
    return 1
}

function veryPogColourValidation(colour: string) {
    var re = /[0-9A-Fa-f]{6}/g;
    if (re.test(colour)) {
        return true
    } else {
        return false
    }
}

function parseStatusText(content: string) {
    var splitText = content.split('status')
    if (splitText.length != 2) {
        return false
    }
    if (splitText[1].trimStart().length > 100) {
        return false
    }
    return splitText[1].trimStart()
}

export default command