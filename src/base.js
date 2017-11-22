import Rebase from 're-base'
import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAsUJufzttToviK46YkGp5grfNUZ9d0-Rc',
  authDomain: 'react-firebase-chat-web-app.firebaseapp.com',
  databaseURL: 'https://react-firebase-chat-web-app.firebaseio.com',
  projectId: 'react-firebase-chat-web-app',
  storageBucket: 'react-firebase-chat-web-app.appspot.com',
  messagingSenderId: '625454304536'
}

const firebase = Firebase.initializeApp(config)

const base = Rebase.createClass(firebase.database())

export { base as default, firebase }
