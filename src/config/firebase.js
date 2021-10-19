import firebase from 'firebase/compat'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyACA5_b9zHrHD0PlyQL4FIl_lsY-WcGMxM',
  authDomain: 'taskmanager-31819.firebaseapp.com',
  projectId: 'taskmanager-31819',
  storageBucket: 'taskmanager-31819.appspot.com',
  messagingSenderId: '242727212679',
  appId: '1:242727212679:web:94c18caed377a7092b8a22',
  measurementId: 'G-51LNS5M64E'
}

firebase.initializeApp(firebaseConfig)

export { firebase }
