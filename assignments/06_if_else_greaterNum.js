// //2. Implement a function with three args to check the greatest number amongst three 
// numbers using if else if statements and call the same function for following inputs. 
// Note: Don’t forget to check the valid input number then only do the comparison. In case 
// invalid inputs, please ignore it and consider the valid numbers that +ve or -ve 
// 2.1. Ex → 56, 70, 80
// 2.2. Ex. → -20, -90,0

function greaterNum(p,q,r) {
    if (p>q && p>r) {
        console.log(`The greater number is: ${p}`);
    } else {
        if (q>p && q>r) {
            console.log(`The greater number is: ${q}`);
        }
        else{
            console.log(`The greater number is: ${r}`);
        }
    }
}
greaterNum(56,70,80);
greaterNum(-20, -90,0);