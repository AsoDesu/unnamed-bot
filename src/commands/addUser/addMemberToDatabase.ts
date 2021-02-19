import { Message } from 'discord.js'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import '../../firebaseinnit'

var auth = firebase.auth()
var database = firebase.firestore()
var storage = firebase.storage()

function addUser(msg: Message, scoresaber: string, minecraft: boolean) {

    var userRef = database.collection('users').doc(msg.member.id)
    database.collection('users').where((!minecraft ? 'scoresaberId' : 'minecraft'), '==', scoresaber).get().then(docs => {
        if (docs.empty) {
            addUserToFirestore()
            return;
        }
        msg.reply('That user is already registered')
        return;
    })

    function addUserToFirestore() {
        userRef.get().then(doc => {
            if (!doc.exists || !doc.data().scoresaberId && !doc.data().minecraft) {
                if (!minecraft) {
                    userRef.set({
                        scoresaberId: scoresaber
                    }, { merge: true })
                } else {
                    userRef.set({
                        minecraft: scoresaber
                    }, { merge: true })
                }
                msg.channel.send('Linked you to a profile.')
                return;
            }

            msg.reply("You're already registered.")
            return;
        })
    }
}

export default addUser