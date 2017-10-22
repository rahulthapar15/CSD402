// window.alert("OKAY");

var category = document.getElementById("category");
var submit = document.getElementById("submitBtn");

var dropdown = document.getElementById("menu1");
// var opt = document.createElement("option");


var firebase_ref = firebase.database().ref();
function submitClick(){
    // window.alert("Working");
    var mCategory = category.value;
    firebase_ref.child("Category").push().set(mCategory);

    window.alert("DONE");
}
