// conditional Statement
// 1. if eslse Statement

let num = 80;

if (num >= 90) {
  console.log("Grade: A");
} else if (num >= 80) {
  console.log("Grade:B");
} else {
  console.log("Grade:F");
}

// 2. Switch Statement

let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wendsday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid Day name";
}

console.log(dayName);

//3. simple Calculator

let operator = "*";
let num1 = 5;
let num2 = 10;
let results;

switch (operator) {
  case "+":
    results = num1 + num2;
    break;
  case "-":
    results = num1 - num2;
    break;
  case "*":
    results = num1 * num2;
    break;
  case "/":
    results = num1 / num2;
    break;
  default:
    results = "Please Enter a Valid Input";
}

console.log(`Results: ${results}`);
