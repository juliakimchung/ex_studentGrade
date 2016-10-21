var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var newScores = scores.sort();
console.log(newScores);

var numOfScores = newScores.length;
console.log("number of scores",numOfScores );

var highestScore = newScores[numOfScores -1];
console.log("highest score:", highestScore );

FScores = scores.filter(function(num) {return num  >= 50 && num <= 60});
console.log("F",FScores );
DScores = scores.filter(function(num) {return num >=61 && num <= 70});
console.log("D", DScores );
CScores = scores.filter(function(num) {return num >=71 && num <= 80});
console.log("C", CScores );
BScores = scores.filter(function(num) {return num >= 81 && num <= 90});
console.log("B",BScores );
AScores = scores.filter(function(num) {return num >= 91 && num <= 100});
console.log("A",AScores );

var numOfF = FScores.length;
console.log("number of F", numOfF);
var numOfD = DScores.length;
console.log("number of D", numOfD );
var numOfC= CScores.length;
console.log("number of C", numOfC );
var numOfB = BScores.length;
console.log("number of B",numOfB );
var numOfA =AScores.length;
console.log("number of A",numOfA );