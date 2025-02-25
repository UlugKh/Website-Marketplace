document.addEventListener("DOMContentLoaded", () => {
    const auth = firebase.auth();
    const db = firebase.firestore();
    const userContent = document.body;  // Will hide content initially

    // Hide content until data is ready
    userContent.style.display = "none";

    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("User logged in:", user);

            // Fetch user data from Firestore
            db.collection("users").doc(user.uid).get().then(doc => {
                let userName = user.displayName; // Default to Firebase Auth name
                let userEmail = user.email; 

                if (doc.exists && doc.data()) {
                    console.log("User found in Firestore:", doc.data());
                    const userData = doc.data();
                    userName = userData.name || user.displayName;
                    userEmail = userData.email || user.email;
                } else {
                    console.warn("⚠️ No Firestore record found for this user. Creating one now...");

                    // If no record exists, create one
                    db.collection("users").doc(user.uid).set({
                        name: user.displayName,
                        email: user.email
                    }).then(() => {
                        console.log("✅ New user record created in Firestore.");
                    }).catch(error => {
                        console.error("Firestore Save Error:", error);
                    });
                }

                document.getElementById("user-name").innerText = userName;
                document.getElementById("user-email").innerText = userEmail;
                // Show content only after data is ready
                userContent.style.display = "block";

            }).catch(error => {
                console.error("Error fetching user data:", error);
            });
        } else {
            window.location.href = "login.html"; // Redirect if no user is logged in
        }
    });

    // Logout Functionality
    document.getElementById("logout").addEventListener("click", () => {
        auth.signOut().then(() => {
            alert("Logged out successfully!");
            window.location.href = "index.html";
        }).catch(error => {
            console.error("Logout Error:", error);
        });
    });

    document.getElementById("home").addEventListener("click", () => {
        window.location.href = "index.html";  // Redirect to login page
    });
});
