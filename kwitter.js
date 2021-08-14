function adduser(){
    usnm=document.getElementById("username_input").value;
    localStorage.setItem("Username",usnm);
    window.location="kwitter_room.html";
}
