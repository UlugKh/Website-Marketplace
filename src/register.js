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
    
document.getElementById("home").addEventListener("click", () => {
    window.location.href = "index.html";  // Redirect to login page
});

auth.onAuthStateChanged(user => {
    if (user && window.location.pathname.includes("login.html")) {
        // setTimeout(() => {

        // }, 5000);
        window.location.href = "user.html"; // Redirect to user info page
    }
});


});