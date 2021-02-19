import { PlayerStats } from './types'
import got from 'got'

async function PlayerDoesExist(name: string) {
    var data = await GetPlayer(name)
    if (!data.success) return false
    if (data.player == null) return false
    if (data.player != null) return true
}

async function GetPlayerStats(name: string) {
    var data = await GetPlayer(name)
    if (!data.success) return null
    if (data.player == null) return null
    
    return data.player
}

async function GetPlayer(name: string) {
    return await JSON.parse((await got(`https://api.hypixel.net/player?key=${process.env.APIKEY}&name=${name}`)).body) as PlayerStats
}


export default {
    PlayerDoesExist,
    GetPlayerStats
}