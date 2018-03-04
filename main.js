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

//-----------CHALLENGE TWO ------------------

var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];
//   var country = 'Spain'  // should return 8
//   var country = 'Portugal'  // should return 1
//   var country = 'Russia'  // should return 0

function champs (countryValue){
    var count = 0;
for(var j = 0; j < winnerList.length; j++){
    var countryName = winnerList[j].country;
    if (countryName === countryValue){
        count++;
}
}
var soccerDiv = document.getElementById("soccer");
var printCount = "<h1> The Country of " +countryValue + " has " + count +  " trophies.</h1>"
soccerDiv.innerHTML += printCount;

}
champs("Spain");
champs("Germany");
champs("Italy");
champs("England");
champs("Portugal");

// -------Challenge 3 ---------
var test1 = {a: 5, b:2, operator: "add"};
var test2 = {a: 5, b:2, operator: "subtract"}; 
var test3 = {a: 5, b:2, operator: "multiply"}; 
var test4 = {a: 5, b:2, operator: "divide"};

function math (elementary){
    var result = 0;
    if(elementary.operator === "add")
        result = (elementary.a + elementary.b);
    if(elementary.operator === "subtract")
        result = (elementary.a - elementary.b);
    if(elementary.operator === "multiply")
        result = (elementary.a * elementary.b);
    if(elementary.operator === "divide")
        result = (elementary.a / elementary.b);
var algebraDiv = document.getElementById("algebra");
var printMath = "<h1> For " + elementary.operator + ", The answer is: " + result + "!</h1>";
algebraDiv.innerHTML += printMath;
}
math(test1);
math(test2);
math(test3);
math(test4);
