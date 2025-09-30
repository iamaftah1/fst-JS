// 1. Global Scope

// Variables declared outside any function or block are global.
// var → attaches to the window/global object.
// let and const → do not attach to the global object.

var s = 10;
let t = 20;
const u = 30;

console.log(s); // 10
console.log(t); // 20
console.log(u); // 30

console.log(window.a); // 10 ✅ (var is global property in browsers)
console.log(window.b); // undefined ❌
console.log(window.c); // undefined ❌

// 2. Function Scope (local to a function)
// var is function-scoped → available anywhere inside the function.
// let and const are block-scoped → available only in the block {} they are declared in.

function testScope() {
  var x = 1;
  let y = 2;
  const z = 3;

  console.log(x, y, z); // 1 2 3
}

testScope();
// console.log(x); // ❌ ReferenceError
// console.log(y); // ❌ ReferenceError
// console.log(z); // ❌ ReferenceError

// 3. Block Scope (inside { } like if, loops)

if (true) {
  var m = "var inside block";
  let n = "let inside block";
  const o = "const inside block";

  console.log(m); // "var inside block"
  console.log(n); // "let inside block"
  console.log(o); // "const inside block"
}

console.log(m); // ✅ "var inside block" (var leaks outside block)
// console.log(n); // ❌ ReferenceError
// console.log(o); // ❌ ReferenceError

//   4. Redeclaration & Reassignment
// var → can be redeclared and reassigned.
// let → cannot be redeclared in the same scope, but can be reassigned.
// const → cannot be redeclared or reassigned.

var a = 1;
var a = 2; // ✅ redeclare and reassign
console.log(a); // 2

let b = 3;
// let b = 4; // ❌ redeclaration not allowed
b = 4; // ✅ reassignment allowed
console.log(b); // 4

const c = 5;
// const c = 6; // ❌ redeclaration not allowed
// c = 6;       // ❌ reassignment not allowed
console.log(c); // 5
