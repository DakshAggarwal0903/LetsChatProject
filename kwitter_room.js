var firebaseConfig = {
  apiKey: "AIzaSyBxONGus_QnIs-VBW3afYB69eOzZfl8FaI",
  authDomain: "kwitter-5d6d1.firebaseapp.com",
  databaseURL: "https://kwitter-5d6d1-default-rtdb.firebaseio.com/",
  projectId: "kwitter-5d6d1",
  storageBucket: "kwitter-5d6d1.appspot.com",
  messagingSenderId: "1031080137326",
  appId: "1:1031080137326:web:35d1b0162b34c82667cc7f",
  measurementId: "G-R4ZF97QMK3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  u=localStorage.getItem("Username"); 
 document.getElementById("wel").innerHTML="Welcome, "+u+"!";

  function addroom(){
    Roomname= document.getElementById("rn").value;
    console.log(Roomname);
    firebase.database().ref("/").child(Roomname).update({
          Purpose: "Adding a room name"
    });
    localStorage.setItem("Room_name",Roomname);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >Room Name : "+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
//End code
});});}
getData();
function redirectToRoomName(r){
  console.log(r);
  localStorage.setItem("Room_name",r);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("Username");
  localStorage.removeItem("Room_name");
  window.location="index.html";
}
