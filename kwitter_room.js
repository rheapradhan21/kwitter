var firebaseConfig = {
      apiKey: "AIzaSyAc8G1K5Kcu2NWTHCvZytlt74X37NpDCD8",
      authDomain: "kwitter-60372.firebaseapp.com",
      databaseURL: "https://kwitter-60372-default-rtdb.firebaseio.com",
      projectId: "kwitter-60372",
      storageBucket: "kwitter-60372.appspot.com",
      messagingSenderId: "152117616957",
      appId: "1:152117616957:web:0449fd8c81f72a0dfd2554"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("h3user_name").innerHTML = "Welcome " + user_name + " !";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(message_id){
      console.log(message_id);
      localStorage.setItem("room_name", message_id);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}