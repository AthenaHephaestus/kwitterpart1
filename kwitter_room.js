
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBzveC3cJ2J4v-7-tQY_2MOw8EXyY-_uBU",
      authDomain: "kwitter-47a8c.firebaseapp.com",
      databaseURL: "https://kwitter-47a8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-47a8c",
      storageBucket: "kwitter-47a8c.appspot.com",
      messagingSenderId: "285993455876",
      appId: "1:285993455876:web:e2b6e55e0c1df466760051"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
