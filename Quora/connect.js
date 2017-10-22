// window.alert("OKAY");

var category = document.getElementById("category");
var submit = document.getElementById("submitBtn");

var firebase_ref = firebase.database().ref();
function submitClick(){
    // window.alert("Working");
    firebase_ref.child("Text").set("Some Value");
    window.alert("DONE");
}