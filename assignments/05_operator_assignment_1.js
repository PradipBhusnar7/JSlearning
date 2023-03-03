console.log("*****Part 1*****");
function squareOfWordLength(value) {
    console.log(`The given word is : ${value} `);
    console.log(`The Length of word is : ${value.length}`);
    console.log(`The Square of Length is : ${value.length ** 2}`);
    console.log(`************************************************`);
} 
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart”");

console.log("*****Part 2*****");

function operat() {
    var nit = "I am Angular Developer";
    var strLength = nit.length;
    console.log(` The string length of "I am Angular Developer" is : ${strLength}`);
    var totalWord = nit.split(" ");
    var wordCount = totalWord.length;
    console.log(`The total number of words of "I am Angular Developer" is : ${wordCount} `);
    var divide = nit.length / totalWord.length;
    console.log(`Result of string length divide by total word is : ${divide}`);
    var multiply =  nit.length *   totalWord.length;
    console.log(`Result of string length multiply by total word is : ${multiply}`);
}
operat();