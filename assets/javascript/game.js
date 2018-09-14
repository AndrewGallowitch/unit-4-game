

// variables

var targetNumber = 0;
var userNumber = 0;

var wins = 0;
var losses = 0;


// functions
// function to restart game to call when user wins or loses


var reset = function() {
    targetNumber = Math.floor(Math.random() * 100) + 20;
    $("#number-to-guess").text(targetNumber);
    
    $("#soccer").val(Math.floor(Math.random() * 12) + 1);
    $("#football").val(Math.floor(Math.random() * 12) + 1);
    $("#tennisball").val(Math.floor(Math.random() * 12) + 1);
    $("#basketball").val(Math.floor(Math.random() * 12) + 1);
    userNumber = 0;
    $("#user-number").html(userNumber);
    
    console.log($("#soccer").val());
    console.log($("#football").val());
    console.log($("#basketball").val());
    console.log($("#tennisball").val());
}
reset()




// on.click function for images to pull the numberOptions
$(".btn").on("click", function() {
    var number = parseInt($(this).val());
    userNumber += number;
    $("#user-number").html(userNumber);
    
    //win if statement
if(userNumber === targetNumber) {
    wins++;
    $("#wins").html(wins);
    reset();
}
    //lose if statement
else if(userNumber > targetNumber) {
    losses++;
    $("#losses").html(losses);
    reset();
}
    
});




  











  