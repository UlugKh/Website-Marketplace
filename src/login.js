console.log("Firebase initialized successfully!");


document.addEventListener("DOMContentLoaded", () => {
    // Handle Email/Password Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            console.log("Login Attempt:", email);

            auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log("Login Success:", userCredential.user);
                alert("Login successful!");
                window.location.href = "user.html";
            })
            .catch(error => {
                console.error("Login Error:", error);
                if (error.code === "auth/invalid-credential") {
                    alert("No user found with this email or password. Please register first.");
                } else if (error.code === "auth/wrong-password") {
                    alert("Incorrect password. Please try again.");
                } else {
                    alert(error.message);
                }
            });
        
        });
    }

    // Handle Google
    const googleSignInBtn = document.getElementById("google-signin");
    if (googleSignInBtn) {
        googleSignInBtn.addEventListener("click", () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
                .then(result => {
                    const user = result.user;

                    console.log("Google Login Successful:", user);

                    // Ensure the user is saved in Firestore
                    return db.collection("users").doc(user.uid).set({
                        name: user.displayName || "No Name",
                        email: user.email
                    }, { merge: true });  // Merge ensures we don't overwrite existing data
                })
                .then(() => {
                    console.log("User data saved to Firestore!");
                    window.location.href = "user.html"; // Redirect to user page
                })
                .catch(error => {
                    console.error("Google Sign-In Error:", error);
                });
        });
    }

    document.getElementById("home").addEventListener("click", () => {
        window.location.href = "index.html";  // Redirect to login page
    });
});