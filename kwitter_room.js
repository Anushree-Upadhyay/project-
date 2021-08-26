var firebaseConfig = {
    apiKey: "AIzaSyCBbx1yJ8xpnFMECWL2BMowj5NrqAiigb4",
    authDomain: "project-39d53.firebaseapp.com",
    projectId: "project-39d53",
    storageBucket: "project-39d53.appspot.com",
    messagingSenderId: "884389201208",
    appId: "1:884389201208:web:0e35008ed8ae67916e2dcd"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function addroom()
      {
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "https://www.google.co.in/";
      }
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
 console.log("Room_names - " + Room_names);
 row = "<div class='room_name' id=" + Room_names + "onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML += row;
       });});}
 getData();
 function redirecttoroomname(name)
 {
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location = "https://www.google.co.in/";
 }
  
      //End code
      });});}
getData();
