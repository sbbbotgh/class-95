var ikey = localStorage.getItem("ikey");
var userName = "";

function hunting(){
    if (ikey == "true"){
        userName = localStorage.getItem("userName");
        document.getElementById("user_name").value = userName;
    }
}

function add(){
    userName = document.getElementById("user_name").value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("ikey", "true");
    document.getElementById("user_name").value = "";
    window.location = "kwitter_room.html";
}