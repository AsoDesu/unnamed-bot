import { EmbedFieldData, Message, MessageEmbed } from "discord.js";

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import '../../firebaseinnit'
import getUserFromScoreSaber from '../../scoresaberApiGrabber'
import hypixel from '../../hypixel-api/hypixelApiGrabber'

import randomColour from '../../randomColor'

var firestore = firebase.firestore()

function command(msg: Message, args: string[]) {
    var userId: string = (msg.mentions.users.size == 0) ? msg.author.id : msg.mentions.users.first().id
    firestore.collection('users').doc(userId).get().then(async doc => {
        if (!doc.exists || !doc.data().scoresaberId && !doc.data().minecraft) {
            msg.reply('That user is not registered')
            return
        }

        var data = doc.data()

        var dataDescription: string = ``

        if (data.scoresaberId) { dataDescription = dataDescription.concat(`\n**ScoreSaber**: https://scoresaber.com/u/${data.scoresaberId}`) }
        if (data.minecraft) { dataDescription = dataDescription.concat(`\n**Minecraft**: [${data.minecraft}](https://plancke.io/hypixel/player/stats/${data.minecraft})`) }
        if (data.twitch) { dataDescription = dataDescription.concat(`\n**Twitch**: https://twitch.tv/${data.twitch}`) } 
        if (data.birthday) { dataDescription = dataDescription.concat(`\n**Birthday**: ${data.birthday}`) }
        if (data.status) {dataDescription = dataDescription.concat(`\n**Status**: ${data.status}`)}
        if (data.awards) { dataDescription = dataDescription.concat(`\n**Awards**: ${data.awards.join(', ')}`) }
        var colour = randomColour()
        if (data.color) { colour = data.color }

        var profileEmbed = {
            "title": `${(await msg.guild.members.fetch(userId)).user.username}'s Profile`,
            "description": dataDescription,
            "color": colour,
            "fields": await generateFields(data)
        }

        msg.channel.send(new MessageEmbed(profileEmbed))
    })
}

async function generateFields(data: any) {
    var fields: EmbedFieldData[] = []
    
    if (data.scoresaberId) {
        var scoreSaberUser = await getUserFromScoreSaber(data.scoresaberId)
        fields.push({ "name": "Global Rank", "value": `#${numberWithCommas(scoreSaberUser.playerInfo.rank)}`, "inline": true })
        fields.push({ "name": "Country Rank", "value": `#${numberWithCommas(scoreSaberUser.playerInfo.countryRank)}`, "inline": true })
    }

    if (data.minecraft) {
        var hypixelUser = await hypixel.GetPlayerStats(data.minecraft)
        fields.push({ name: "Hypixel XP", value: `${numberWithCommas(hypixelUser.networkExp)}xp`, inline: true })
        fields.push({ name: "Hypixel Achievement Points", value: `${numberWithCommas(hypixelUser.achievementPoints)}`, inline: true })
    }
    return fields
}

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default command