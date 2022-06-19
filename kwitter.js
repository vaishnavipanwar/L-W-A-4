function addUser(){
    var User_Name=document.getElementById("user_name").value;
    localStorage.setItem("User_Name", User_Name );
    window.location="kwitter_room.html";
}
