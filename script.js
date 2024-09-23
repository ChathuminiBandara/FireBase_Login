const {default : firebase} =  require ("firebase/compact/app");

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy73w9TPY0PAHusWJE2jjgryUdbEtcRsc",
    authDomain: "fir-login-60699.firebaseapp.com",
    projectId: "fir-login-60699",
    storageBucket: "fir-login-60699.appspot.com",
    messagingSenderId: "981771833856",
    appId: "1:981771833856:web:8cda41e523f10ca37cfee5"
};



//Initialize firebase
firebase.initializeApp(firebaseConfig);

//Create a Auth instance
const auth = firebase.auth();

//Sign Up Function
document.getElementById('signbtn').addEventListener('click',()=> alert("Test1"))



//Sign in function
document.getElementById('inbtn').addEventListener('click',()=> alert("Test2"))






document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Sign-In functionality not implemented.');
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Sign-Up functionality not implemented.');
});

