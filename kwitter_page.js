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
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data["name"];
msg = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
msg_with_tag = "<h4 class='message_h4'>"+msg+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value= "+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_with_tag + msg_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
