// Comparison operators

// Equal
// Compares values but ignores type (performs type coercion).

console.log(5 == 5); // true
console.log(5 == "5"); // true (string "5" is converted to number)
console.log(true == 1); // true
console.log(false == 0); // true

// Strict Equal
// Compares values and type (no type conversion).
console.log(5 === 5); // true
console.log(5 === "5"); // false (different types: number vs string)

// NOT Equal
// Checks if values are not equal (ignores type).
console.log(5 != "5"); // false (they’re equal after type coercion)
console.log(10 != 5); // true

//Strict Not Equal to

// Checks if values or types are different.
console.log(5 !== "5"); // true (different types)
console.log(5 !== 5); // false

// Greater then

console.log(10 > 5); // true
console.log(3 > 7); // false

// Less Than
console.log(3 < 7); // true
console.log(10 < 5); // false

// Greater Than or Equal to

console.log(5 >= 5); // true
console.log(8 >= 10); // false

// Less Than or Equal To

console.log(5 <= 5); // true
console.log(3 <= 8); // true

// Ternary Operator

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult
