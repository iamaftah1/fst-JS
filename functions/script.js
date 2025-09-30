function additions(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}
function Subtraction(num1, num2) {
  //   console.log(num1 - num2);
  return num1 - num2;
}
function Multiplicaitons(num1, num2) {
  //   console.log(num1 * num2);
  return num1 * num2;
}
function Devisions(num1, num2) {
  //   console.log(num1 / num2);
  return num1 / num2;
}

const add = additions(10, 2);
const sub = Subtraction(8, 2);
const multi = Multiplicaitons(25, 2);
const divide = Devisions(18, 2);

console.log(add);
console.log(sub);
console.log(multi);
console.log(divide);

// We declarre function in three different ways

// 1.function declares

function greet(name) {
  return `hello ${name}`;
}

console.log(greet("Amina"));

// 2.function Expression

const greetHim = function (name) {
  return `Hello ${name}`;
};

console.log(greet("Salim"));

// 3.Arrow function (ES6)

const greetMe = (name) => `Hello ${name}`;

console.log(greetMe("Abdifatah"));
