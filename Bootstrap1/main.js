$(document).ready(function () {
    $('#card2').hide();
    $("#card3").hide();
    $("#default").hide();
    $("#finalpricecard").hide();

});

function Electronic(){
    console.log("Pressed");
    $('#card1').show();
    $('#card2').hide();
    $("#card3").hide();
    $("#default").hide();
}
function Clothes() {
    console.log("Pressed");
    $('#card2').show();
    $('#card1').hide();
    $("#card3").hide();
    $("#default").hide();
}
function Food() {
    console.log("Pressed");
    $('#card3').show();
    $('#card2').hide();
    $("#card1").hide();
    $("#default").hide();
}
var i = 0;
var q_i=0;
var initialPrice;
var temp;

var names = [];
var prices = [];
var quantities =[];
var finalPrices =[];

function AddtoCart(price,name){

    console.clear();
    $("#finalpricecard").hide();
    
    $('#details').append("<tr><td>" + name + "</td><td id='quant'><div class='col'> \
    <input type= 'text' id='Q"+q_i+"' class='form-control' placeholder= '0'> \
    </div> \
    </td><td>"+price+"</td></tr>");
    q_i++;

    names.push(name);
    prices.push(price);
}
    
var q_id=0;
var total = 0;
function checkout(){

    for(var p=0;p<prices.length;p++){
        var q = $('#Q' + q_id).val();
        quantities.push(q);
        q_id++;
    }

    for(var index=0;index<prices.length;index++){
        console.log(names[index]);
        console.log(prices[index]);
        console.log(quantities[index]);
        console.log("-------------------");
    }
    index =0;

    for (var index = 0; index < prices.length; index++) {
        temp = prices[index]*quantities[index];
        finalPrices.push(temp);
    }

    $("#finalpricecard").show();

    for (var index = 0; index < finalPrices.length; index++) {
        total +=finalPrices[index];
    //    console.log( finalPrices[index]);
    }

    $('#total_price').html("$ "+total+" USD");
    console.log("TOATAL AMOUNT TO PAY : "+ total);
    $('#details').empty();
    names.length =0;
    prices.length =0;
    quantities.length =0;
    finalPrices.length =0;
    total=0;

}

