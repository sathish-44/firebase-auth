import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey:'AIzaSyAWua-yOoaX1ul5OVL4yEKo8IKCGL50SbI',
  authDomain: 'my-cv-d947f.firebaseapp.com',
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: 'my-cv-d947f',
  storageBucket:'my-cv-d947f.appspot.com',
  messagingSenderId: '803634556362',
  appId: '1:803634556362:web:d6016d8025927f5b9cf333'
})

export const auth = app.auth()
export default app