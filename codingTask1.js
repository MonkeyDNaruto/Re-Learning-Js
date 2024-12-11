var scoreOfJohn = 80;
var scoreOfNick = 41;
const passingScore = 50;

if(scoreOfJohn >= passingScore && scoreOfNick >= passingScore) {
    console.log("Both students passed.");
} else if(scoreOfJohn >= passingScore || scoreOfNick >= passingScore) {
    console.log("One of the students passed: ");
    if(scoreOfJohn > scoreOfNick) {
        console.log("and it is John with " + scoreOfJohn + " points.");
    } else {
        console.log("and it is Nick with " + scoreOfNick + " points.");
    }
} else {
    console.log("Both of the students failed.")
}