//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");
    function send(){
      msg = document.getElementById("msg_input").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg_input").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
