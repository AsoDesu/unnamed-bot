import { Message, TextChannel } from "discord.js";

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import '../firebaseinnit'
var db = firebase.firestore()

async function question(msg: Message) {
    if (!((msg.channel as TextChannel).name == 'questions-for-organisers')) return;

    var questions = await db.collection('questions').get()
    questions.docs.forEach(doc => {
        if (msg.content.includes(doc.id)) {
            doc.data().values.forEach((value: any) => {
                if (msg.content.includes(value.name) || value.name == 'any') {
                    msg.channel.send(value.value).catch(() => {})
                }
            })
        }
    })
}

export default question