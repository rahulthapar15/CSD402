// window.alert("OKAY");
var firebase_ref = firebase.database().ref();


    var root_ref = firebase.database().ref().child("Category");
    root_ref.on("child_added", snap =>{


        var cat_name = snap.val();
    //     var btn = document.createElement("BUTTON");
    // var t = document.createTextNode(cat_name);
    // btn.appendChild(t);
    // // document.body.appendChild(btn);
    //     $("#panel_body").append(btn);
    //     btn.style.backgroundColor = '#D9534F';
    //     btn.style.borderRadius = '17px';
    //     btn.style.color = 'white';
    //     btn.style.paddingLeft = '4%';
    //     btn.style.paddingRight = '4%';


    });

    var myques_ref = firebase.database().ref().child("Questions").child("My Questions");
    myques_ref.on("child_added",snap =>{

        var qu = snap.val();
        // var an = document.createElement("BUTTON");
        // var te = document.createTextNode("View Answers");
        // an.appendChild(te);

        $("#table_body").append("<tr><td>"+ qu + "</td><td><button>View Answers</button></td></tr>");


    });

var category = document.getElementById("category");
var submit = document.getElementById("submitBtn");
var ques_title = document.getElementById("question_title");
var quesSub_btn = document.getElementById("submitQues");

var description = document.getElementById("description");

var logout = document.getElementById("logout");



function submitClick(){
    // window.alert("Working");
    var mCategory = category.value;
    firebase_ref.child("Category").push().set(mCategory);
// window.alert("DONE");
    
}

function submitQuestion(){

    var mTitle = ques_title.value;
    var mDes = description.value;
    firebase_ref.child("Questions").child("My Questions").child("Title").push().set(mTitle);
    firebase_ref.child("Questions").child("My Questions").child("Description").push().set(mDes);
    addPost();
    $('#askQuestion').modal('hide');
}

var post_title_ref = firebase.database().ref().child("Questions").child("My Questions").child("Title");
var post_desc_ref = firebase.database().ref().child("Questions").child("My Questions").child("Description");
function addPost(){
    
}

//NEW LOCATION

var new_location = document.getElementById("Newlocation");
var blocation = document.getElementById("new_location");

function submitLocation(){

    var mLocation = new_location.value;
    firebase_ref.child("Location").push().set(mLocation);
    
    $('#location').modal('hide');
}

function User(){
    window.alert("User clicked");
}
