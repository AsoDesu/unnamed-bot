import { Message } from 'discord.js'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import '../../firebaseinnit'

var auth = firebase.auth()
var database = firebase.firestore()
var storage = firebase.storage()

function addUser(msg: Message, scoresaber: string) {

    var userRef = database.collection('users').doc(msg.member.id)
    database.collection('users').where('scoresaberId', '==', scoresaber).get().then(docs => {
        if (docs.empty) {
            addUserToFirestore()
            return;
        }
        msg.reply('That scoresaber user is already registered')
    })

    function addUserToFirestore() {
        userRef.get().then(doc => {
            if (!doc.exists || !doc.data().scoresaberId) {
                userRef.set({
                    scoresaberId: scoresaber
                }, {merge: true})
                return;
            }
    
            msg.reply("You're already registered, contact a staff member if you don't have the Member role")
        })
    }

    msg.channel.send('Linked you to a profile :)')
}

export default addUser