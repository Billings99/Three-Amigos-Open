import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCoZaHoO6agnGjccBiO4UFsgA7HSk0iD0M",


  authDomain: "three-amigos-open.firebaseapp.com",

  projectId: "three-amigos-open"
  
  storageBucket: "three-amigos-open.firebasestorage.app"

  messagingSenderId: "1072291060086",

  appId: "1:1072291060086:web:acbc8bd6ed2e76cb670257"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
