
//ADD YOUR FIREBASE LINKS HERE
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
  usn=localStorage.getItem("Username");
  Room_n= localStorage.getItem("Room_name")
function send(){
   mesg= document.getElementById("msg").value;
   firebase.database().ref(Room_n).push({
       Name: usn,
       Message:mesg,
       Like:0
   });
   document.getElementById("msg").value="";
}
function getData(){
    firebase.database().ref("/"+Room_n).on('value',function(snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.key;
            childData=childSnapshot.val();
            if(childKey!="purpose"){
                firebasemessageid=childKey;
                messageData=childData;
                console.log("This is a firebase message",firebasemessageid);
                console.log("This is a message",messageData);
                e=messageData['Name'];
                f=messageData['Message'];
                g=messageData['Like'];
                name_with_tag = "<h4> "+ e +"<img class='user_tick' src='tick.png'>";
                message_with_tag = "<h4 class='message_h4'>" + f + "</h4>";
                like_button ="<button class='btn btn-warning' id="+firebasemessageid+" value="+g+" onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ g +"</span></button><hr>";
                idk=name_with_tag+message_with_tag+like_button+span_with_tag;
                document.getElementById("output").innerHTML+=idk;
            }
        });
    });
}
getData();
function updateLike(meaningful){
console.log(meaningful);
button_id=meaningful;
console.log(button_id);
likes=document.getElementById(button_id).value;
console.log(likes);
addition=Number(likes)+1
console.log(addition);
firebase.database().ref(r_n).child(meaningful).update(
    {
        Like: addition
    }
);
}
function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("Room_name");
    window.location.replace("index.html")
}