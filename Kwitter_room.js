
  var firebaseConfig = {
    apiKey: "AIzaSyDdFaHyDfhU05FDy07FO2BawhuKvVhEveY",
    authDomain: "let-chat-web-app-ddab3.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-ddab3-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-ddab3",
    storageBucket: "let-chat-web-app-ddab3.appspot.com",
    messagingSenderId: "272680807374",
    appId: "1:272680807374:web:1c511c1f1a08cb93a5999f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  user_name = localStorage.getItem("userName");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

  var room_name = "";

  function addRoom(){

      room_name = document.getElementById("cude").value;

      document.getElementById("cude").value = "";

      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
        cude:"yes"
    });
    
    window.location = "kwitter_page.html";

  }



function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";

document.getElementById("output").innerHTML += row;

//End code
});});}
getData();


function redirectToRoomName(id){
  console.log(id);
  
  localStorage.setItem("room_name", id);

  window.location = "kwitter_page.html";
}