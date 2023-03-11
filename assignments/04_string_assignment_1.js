
var hobby1 = "Gardening";
var hobby2 = "Reading";
var hobby3 = "Listening";
function stringTemplateAssign() {
  console.log(`My dream company name is "Microsoft"`);
  console.log("My Hobbies: ", hobby1, ",", hobby2, ",", hobby3);
  console.log("Total sum of hobby1 char: ", hobby1.length);
  console.log("Total sum of hobby2 char: ", hobby2.length);
  console.log("Total sum of hobby3 char: ", hobby3.length);
  var sum = hobby1.length + hobby2.length + hobby3.length;
  console.log("total sum of character available is: ",sum);
}
stringTemplateAssign();
