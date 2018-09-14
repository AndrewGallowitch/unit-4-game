

// variables

var targetNumber = 0;
var userNumber = 0;

var wins = 0;
var losses = 0;
var counter = 0;


// functions
// function to restart game to call when user wins or loses

var reset = function () {
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

 function newGameWin () {
    if (wins) {
        alert("You win! Play Again?");
    }
 }
    
function newGameLose () {
    if (losses) {
        alert("Sorry you suck! Be better! Play Again?");
    }
}

// on.click function for images to pull the numberOptions
$(".btn").on("click", function () {
    counter = parseInt($(this).val());
    userNumber += counter;
    $("#user-number").html(userNumber);

    //win if statement
    if (userNumber === targetNumber) {
        wins++;
        $("#wins").html(wins);
        newGameWin();
        reset();
        
    }
    //lose if statement
    if (userNumber > targetNumber) {
        losses++;
        $("#losses").html(losses);
        newGameLose();
        reset();
       
    }

});

