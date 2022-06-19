var firebaseConfig = {
    apiKey: "AIzaSyDSsG30FjnlNz4gzPwqCBsrkKt_voZjcp0",
    authDomain: "kwitter-2a249.firebaseapp.com",
    databaseURL: "https://kwitter-2a249-default-rtdb.firebaseio.com",
    projectId: "kwitter-2a249",
    storageBucket: "kwitter-2a249.appspot.com",
    messagingSenderId: "434412396559",
    appId: "1:434412396559:web:76e3c7a55a71846659837a",
    measurementId: "G-C85YH7QR7G"
};
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("User_Name");
var room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location="index.html";
}