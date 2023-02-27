console.log("====Part1====");

function tab1() {
    console.log("The two tabs are Azitharl 100 and 200");
} 
tab1();

function syrup2() {
    console.log("The two syrup are Tusq red and Tuseq green");
} 
syrup2();

console.log("====Part2====");
function personalDetails(firstName,lastName,collegeName){
    console.log("Personal Details are",firstName,lastName);
    console.log(collegeName);
}

console.log("====Part3====");
personalDetails("Pradip","Bhusnar","Government college of engineering karad");
function swapValueDude(value1,value2) {
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(value1,value2);
 }
 swapValueDude("Virat", "Anushka");

 
console.log("====Part4====");
function addThreeValues(val1,val2,val3) {
    var result = val1 + val2 + val3;
    return result;
}
var fresult = addThreeValues(10.23,600,40);
console.log(fresult);
var fresult = addThreeValues("Hello","Good","Morning")
console.log(fresult);