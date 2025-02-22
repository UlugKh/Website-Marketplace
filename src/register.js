// Ensure firebaseConfig is defined only ONCE
const firebaseConfig = {
    apiKey: "AIzaSyCN4xgS2pUoLHPb2-hgPPTwwDT_Yrc3NMY",
    authDomain: "market-auth-123.firebaseapp.com",
    projectId: "market-auth-123",
    storageBucket: "market-auth-123.appspot.com", // Fix the wrong domain
    messagingSenderId: "654776143696",
    appId: "1:654776143696:web:8482959ed3f1644fc32655"
};

// Initialize Firebase only if it hasn't been initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();


console.log("Firebase initialized successfully!");

document.addEventListener("DOMContentLoaded", () => {
    // Handle User Registration
    document.getElementById("signup-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const name = document.getElementById("user-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
    
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
    
            // Save user info in Firestore
            await firebase.firestore().collection("users").doc(user.uid).set({
                name: name,
                email: email
            })
    
            .then(() => {
                console.log("✅ User registered and name saved!");
                // setTimeout(() => {
        
                // }, 1000);
                window.location.href = "user.html"; // Redirect to user info page
            })
        } catch (error) {
            console.error("Error signing up:", error);
            alert(error.message);
        }
    });
});

auth.onAuthStateChanged(user => {
    if (user && window.location.pathname.includes("login.html")) {
        // setTimeout(() => {

        // }, 5000);
        window.location.href = "user.html"; // Redirect to user info page
    }
});