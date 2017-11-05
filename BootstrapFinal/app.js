var category = document.getElementById("category");

function addtoCategory(){
    //var mCategory = category.value;
    window.alert("mCategory");
}
var addItem = document.getElementById("addItem");
function add_down(){
    var item = addItem.value;

    $("#categories").append("<li class='resp-tab-item'><span>" + item + "</span></li>");
}