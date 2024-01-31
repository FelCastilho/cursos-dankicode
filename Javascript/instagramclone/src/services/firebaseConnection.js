import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyAPOWp1JAh6xdVxZ_GNfH73EE4n7JwTyLM",
    authDomain: "instagram-clone-11437.firebaseapp.com",
    projectId: "instagram-clone-11437",
    storageBucket: "instagram-clone-11437.appspot.com",
    messagingSenderId: "331208067680",
    appId: "1:331208067680:web:02fd2b6d6a7b42ccf71105",
    measurementId: "G-Z06JHD29ST"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const functions = getFunctions(firebaseApp);

export { db, auth, storage, functions };

