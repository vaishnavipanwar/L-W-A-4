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
var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML = "welcome!  " + user_name;

function addRoom() {

    var room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
    window.location = "kwitter_page.html";
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
        
        console.log("room_name -" ,+ Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div>";
        document.getElementById("output").innerHTML=row;
            //End code
        });
    });
}
getData();

function Logout() {
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location = "index.html";
}

function rediectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , room_name);
     window.location = "kwitter_page.html";
}