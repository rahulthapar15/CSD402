// window.alert("OKAY");
var firebase_ref = firebase.database().ref();


    var root_ref = firebase.database().ref().child("Category");
    root_ref.on("child_added", snap =>{


        var cat_name = snap.val();
        var btn = document.createElement("BUTTON");
    var t = document.createTextNode(cat_name);
    btn.appendChild(t);
    // document.body.appendChild(btn);
        $("#panel_body").append(btn);
        btn.style.backgroundColor = '#337AB7';
        btn.style.borderRadius = '7px';
        btn.style.color = 'white';
        btn.style.paddingLeft = '2%';
        btn.style.paddingRight = '2%';


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
var question = document.getElementById("question");
var quesSub_btn = document.getElementById("submitQues");

var logout = document.getElementById("logout");



function submitClick(){
    // window.alert("Working");
    var mCategory = category.value;
    firebase_ref.child("Category").push().set(mCategory);
// window.alert("DONE");
    
}

function submitQuestion(){

    var mQuestion = question.value;
    firebase_ref.child("Questions").child("My Questions").push().set(mQuestion);
    $('#askQuestion').modal('hide');
}

function logout(){
    window.alert("Logged out successfull");
}
