const { default: firebase } = require("firebase/compat/app");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy73w9TPY0PAHusWJE2jjgryUdbEtcRsc",
    authDomain: "fir-login-60699.firebaseapp.com",
    projectId: "fir-login-60699",
    storageBucket: "fir-login-60699.appspot.com",
    messagingSenderId: "981771833856",
    appId: "1:981771833856:web:8cda41e523f10ca37cfee5",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Create a Auth instance
const auth = firebase.auth();

// Sign in Function
document.getElementById("inbtn").addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("signupps").value; // Incorrect selector, fix to password

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Sign in successful
            alert("Done!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            alert(errorMessage); // Display error message
        });
});

// Sign up function
document.getElementById("signbtn").addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("password").value; // Use correct selector

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Sign up successful
            alert("Done!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            alert(errorMessage); // Display error message
        });
});