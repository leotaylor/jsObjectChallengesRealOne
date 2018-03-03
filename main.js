// Challenge One ------------
var players = [
    { name: "Bob", 
    scores: [10, 65] 
    },
    { 
    name: "Bill", 
    scores: [90, 5] 
    },
    { 
    name: "Charlie", 
    scores: [40, 55] 
}
]; 

var highestScore = 0;
var winner = []
for(var i = 0; i<players.length; i++){
    var playerScores = players[i].scores;
    var total = playerScores[0] + playerScores[1]; 

    if(total > 100){
        winner = false;
    }   else if(total > highestScore){
        highestScore = total;
        winner = [];
        winner.push(players[i].name);
    }
}

var winningDiv = document.getElementById("winner");
var printWinner = "<h1>The Winner is: "+ winner + "</h1>";
winningDiv.innerHTML = printWinner;


