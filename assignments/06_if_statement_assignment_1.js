console.log(`====1. Create a function to check passed argument number value is even or odd and return the 
result as EVEN or ODD. Ex. 45, 70, 67, 98====`);
function checkEvenOdd(num) {
    if (num%2==0) {
        return "Even";
    }
    if (num%2!=0) {
        return "Odd";
    }
}
var result = checkEvenOdd(45);
console.log(`The number 45 is : ${result}`);
var result = checkEvenOdd(70);
console.log(`The number 70 is : ${result}`);
var result = checkEvenOdd(67);
console.log(`The number 67 is : ${result}`);
var result = checkEvenOdd(98);
console.log(`The number 98 is : ${result}`);

console.log(`************************************************************`);

console.log(`2. Check if person is eligible for vote or not Ex→ age: 18, 20, 17, 40
`);

function checkAge(age) {
    if (age >=18 ) {
        console.log(`Person is eligible for vote is ${age} `);
    }
}
checkAge(18);
checkAge(20);
checkAge(17);
checkAge(40);

console.log(`************************************************************`);

console.log(`. Check if string contains more than 10 character or not Ex → “JavaScript - ES6”`);

var js = "JavaScript - ES6";
var result = js.length;
function countChar(value) {
    if (value >10) {
        console.log(`Yes javascript contain more than 10 char`);
    }
}
countChar(result);

console.log(`************************************************************`);

console.log(`4. Check if string starts with “Java” Ex→ “JavaScript Language”
`);

var word = "JavaScript Language";
var result = word.startsWith("Java");
function start(st) {
    if (st==true) {
        console.log(`string starts with “Java” is :yes`);
    }
}
start(result);