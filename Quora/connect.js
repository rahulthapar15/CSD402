// window.alert("OKAY");
var firebase_ref = firebase.database().ref();


    var root_ref = firebase.database().ref().child("Category");
    root_ref.on("child_added", snap =>{


        var cat_name = snap.val();
        $("#panel_body").append(cat_name+", ");


    });

var category = document.getElementById("category");
var submit = document.getElementById("submitBtn");

var dropdown = document.getElementById("menu1");
// var opt = document.createElement("option");



function submitClick(){
    // window.alert("Working");
    var mCategory = category.value;
    firebase_ref.child("Category").push().set(mCategory);

    window.alert("DONE");
}
