console.log(`====part1====`);

function voteEligibility(age) {
   if (age>=100 || age==0 || age== null || age== undefined) {
    return `Age is not valid ${age}`;
   }
    if (age>=18) {
        return `He or she is eligible for vote ${age}`;
    } else {
        return `He or she is not eligible for vote ${age}`
    }
}
var result = voteEligibility(45);
console.log(`Age 45 is ${result}`);
var result = voteEligibility(17);
console.log( `Age 17 is ${result}`);
var result = voteEligibility(8);
console.log(`Age 8 is ${result}`);
var result = voteEligibility(20);
console.log(`Age 20 is ${result}`);
var result = voteEligibility(-10);
console.log(`Age -10 is ${result}`);
var result = voteEligibility(200);
console.log(`Age 200 is ${result}`);
var result = voteEligibility(100);
console.log(`Age 100 is ${result}`);
var result = voteEligibility(undefined);
console.log(`Age undefined is ${result}`);
var result = voteEligibility(null);
console.log(`Age null is ${result}`);

console.log(`*******************************************`);

function gradeCalculation(marks) {
if (marks<=0 || marks >100 || (typeof marks != "number") || isNaN(marks)) {
    console.log(`Please provid valid marks ${marks}`);
} else {
    if (marks>=90) {
        console.log(`Excellent marks ${marks} Your grade is A+ `);
    }
    if (marks>=75 && marks<90) {
        console.log(`Good marks ${marks}  Your grade is A`);
    }
    if (marks>=35 && marks<50) {
        console.log(`Need improvement ${marks} Your grade is C`);
    }
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
gradeCalculation(undefined);
