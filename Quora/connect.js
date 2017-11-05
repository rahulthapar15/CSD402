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
  //  firebase_ref.child("Location").push().set(mLocation);

    var insertLocation = firebase_ref.child("Location");
    insertLocation.push().set({
       'mLocation' :{
            question : "How are you",
            answer : "I'm good"

        }
    });

    //var newRef = insertLocation.push();
    var postId = newPostRef.key;
    window.alert(postId); 


    $('#location').modal('hide');
}

function User(){
    window.alert("User clicked");
}

function loadJSON(file, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}



function Trending(){
    // $('#trending_post').append("<div class='post post1'><p>" + data.name[0] + "</p></div>");
    loadJSON("delhi.json", function (response) {

        var actual_JSON = JSON.parse(response);
        // window.alert(actual_JSON[0].name);
        $('#trending_post').append("<div class='post p0' style='color:white';><p><strong>" + actual_JSON[0].question + "</strong></p></div>");
        $('#trending_post').append("<div class='post p1' style='color:white';><p><strong>" + actual_JSON[1].question + "</strong></p></div>");
        $('#trending_post').append("<div class='post p2' style='color:white';><p><strong>" + actual_JSON[2].question + "</strong></p></div>");
    });
   // window.alert("Hello");
}
