console.log(`1)**************************************************************`);
const arraySeasonalFruits = ["Banana","orange","Apple","Mango","Water Melon"];
var result = arraySeasonalFruits[0] ;
console.log(`First fruit is : ${result}`);
var result1 = arraySeasonalFruits[4] ;
console.log(`Last fruit is : ${result1}`);

console.log(`2)**************************************************************`);
var out = arraySeasonalFruits.unshift("Papaya");
console.log(`Adding Papaya before banana : ${arraySeasonalFruits}`);

console.log(`3)**************************************************************`);
var remove = arraySeasonalFruits.splice(4,1);
console.log(`Removing Mango from the array : ${arraySeasonalFruits}`);

console.log(`4)**************************************************************`);
var add = arraySeasonalFruits.push("Pineapple");
console.log(`Adding pineapple at last position : ${arraySeasonalFruits}`);


console.log(`5)**************************************************************`);
var adding = arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(`Inserting Dragon fruit before Water Melon : ${arraySeasonalFruits}`);

console.log(`6)**************************************************************`);
var replceOrange = arraySeasonalFruits.splice(2,1,"Kiwi")
console.log(`Replacing Orange With Kiwi :${arraySeasonalFruits}`);

console.log(`7)**************************************************************`);
var firstFour = arraySeasonalFruits.slice(1, 5);
console.log(`Log elements starting from index 1 to 4 :${firstFour}`);

console.log(`8)**************************************************************`);
var adding = arraySeasonalFruits.slice(4, 7);
console.log(` The last three elements are :${adding}`);

