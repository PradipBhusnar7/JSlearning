console.log(`**1. Find the greatest number amongst two number.*`);

function greaterNumber(value1,value2) {
    var result1 = value1 > value2 ? value1 : value2;
    console.log(`The greatest number is :${result1}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`=========================================`);
console.log(`**2. Check → 29, 44, 0, 101 → even or odd numbers**`);


function  isEvenOrOddNum(value) {
    var result = value%2==0 ? "True" :"False";
    return result
}
 var result = isEvenOrOddNum(29);
 console.log(`29 is ${result}`);
 console.log(`44 is ${isEvenOrOddNum(44)}`);
 console.log(`0 is ${isEvenOrOddNum(0)}`);
 console.log(`101 is ${isEvenOrOddNum(101)}`);

 console.log(`=========================================`);
 console.log(`**3. Check → which word has even or odd length “JavaScript”, “developer”, “Google”**`);

 function worldLength(word) {
    var wordLength = word.length;
    var result = wordLength%2 == 0 ? "Even" : "Odd";
    return result;
 }
 var result =worldLength("JavaScript");
 console.log(`Word javascript has length ${result}`);
 var result =worldLength("developer");
 console.log(`Word developer has length ${result}`);
 var result =worldLength("Google");
 console.log(`Word Google has length ${result}`);
 