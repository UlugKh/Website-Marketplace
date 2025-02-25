// config.js (NEW) - Store Firebase credentials securely
const firebaseConfig = {
    apiKey: "AIzaSyCN4xgS2pUoLHPb2-hgPPTwwDT_Yrc3NMY",
    authDomain: "market-auth-123.firebaseapp.com",
    projectId: "market-auth-123",
    storageBucket: "market-auth-123.appspot.com",
    messagingSenderId: "654776143696",
    appId: "1:654776143696:web:8482959ed3f1644fc32655"
};

// Ensure Firebase is initialized only once
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
