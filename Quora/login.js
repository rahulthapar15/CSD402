var sign_in_flag=0;
var temp;
function Login(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if(username==="abc" && password==="abc"){
        // alert("sucess");
        window.location.href = "main.html";
        sign_in_flag=1;
    }else{
        alert("fail");
    }
}