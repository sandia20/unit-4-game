$(document).ready (function(){
//  Assign variables to hold the scores and call the buttons
var initialnumber=0;
var wins=0;
var losses=0;
var bluerandom=0;
var purplerandom=0;
var greenrandom =0;
var redrandom =0;
var finalscore = 0;


//  Assign and show random number (btw 19 - 120) for the initial number
function initialrandom(){
    initialnumber = Math.floor(Math.random()* (120 - 19) + 19);
    $("#numbertomatch").html(initialnumber);
}

//  Re-set game whether WINS or LOSSES -- DO NOT RELOAD PAGE to keep wins and losses counters
function resetgame(){
    initialrandom()
    crystalsrandom()
    finalscore=0;
    $("#total-score").html(finalscore);
}


//  Assign random numbers to each crystal button (btw 1 -12)
function crystalsrandom(){
        bluerandom = Math.floor(Math.random()* (12 - 1) + 1);
        greenrandom = Math.floor(Math.random()* (12 - 1) + 1);
        purplerandom = Math.floor(Math.random()* (12 - 1) + 1);
        redrandom = Math.floor(Math.random()* (12 - 1) + 1);
        //console.log(bluerandom, greenrandom, purplerandom, redrandom)
}

// If statement to assign the random number of the crystal to the final score when clicked
function randomtobutton(a){

    if (a==="[object Object]bluebtn"){
        finalscore += bluerandom
        //goes to function comparescore() to compare the initialnumber with the final score
        comparescore()
        //  Update player's total score if crystal is clicked
        $("#total-score").html(finalscore);
    }
    else if (a==="[object Object]greenbtn"){
        finalscore += greenrandom
        comparescore()
        $("#total-score").html(finalscore);

    }
    else if (a==="[object Object]purplebtn"){
        finalscore += purplerandom
        comparescore()
        $("#total-score").html(finalscore);

    }
    else if (a==="[object Object]redbtn"){
        finalscore += redrandom
        comparescore()
        $("#total-score").html(finalscore);

    }
    
}

//  If statement to compare the total score and the numberto match
 function comparescore(){
     finalscore=parseInt(finalscore)
     initialnumber=parseInt(initialnumber)

    if (finalscore === initialnumber){
        wins ++
        $("#wins").html(wins);  
        alert("You Won!!");
        resetgame()
    } 
    else if (finalscore > initialnumber){
        losses ++
        $("#losses").html(losses);
        alert("You Losse!!");
        resetgame()
    } 
 }
 
 //========================================================
resetgame()

//records the clicks of any button and assign an ID
$(".thebutton").click(function (holdid) { 
    
    if (this.id == 'bluebtn') { 
        holdid += this.id
        randomtobutton(holdid)
    } else if (this.id == 'greenbtn') { 
        holdid += this.id
        randomtobutton(holdid)
    } else if (this.id == 'purplebtn') { 
        holdid += this.id
       randomtobutton(holdid)
    } else if (this.id == 'redbtn') { 
        holdid += this.id
        randomtobutton(holdid)
    } 
});    

})