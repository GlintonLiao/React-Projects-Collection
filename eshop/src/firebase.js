import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXeZmuwt1uUwMx2tZhICNX5hR_v-zljfc",
  authDomain: "eshop-cb863.firebaseapp.com",
  projectId: "eshop-cb863",
  storageBucket: "eshop-cb863.appspot.com",
  messagingSenderId: "6701406075",
  appId: "1:6701406075:web:51618024d3d31a23a6cfde",
  measurementId: "G-5LJPXPRTCR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };