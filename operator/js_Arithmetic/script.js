// Arithmetic operator

// 1.Additions

let x = 10;
let y = 5;
console.log(x + y); // 15

// 2. Substraction

console.log(x - y);

// 3.Multiplication

console.log(x * y);

// Division

console.log(x / y);

// 5.Modulus

console.log(x % y);

// 6.power

console.log(x ** y);

// 7.Increment

let a = 5;
a++;
console.log(a); // 6

// 8.Decrement

let b = 5;
b--;
console.log(b); // 4

// 10. js follows the BODMAS

let result = 2 + 3 * 4;
console.log(result); // 14 (3*4 first, then +2)

let result2 = (2 + 3) * 4;
console.log(result2); // 20 (brackets first)

// Comparison operators

// Compares values but ignores type (performs type coercion).

console.log(5 == 5); // true
console.log(5 == "5"); // true (string "5" is converted to number)
console.log(true == 1); // true
console.log(false == 0); // true
