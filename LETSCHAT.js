function add(){
    var user = document.getElementById("user_name").value;

    localStorage.setItem("user_name",user);

    window.location = "LETSCHAT_room.html";
}