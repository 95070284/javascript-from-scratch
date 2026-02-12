// function in javascript

function add(a, b) {return a + b; }
 let sum = add(5, 10); 
 console.log(sum); // Output: 15 // Function expression let multiply = function (x, y) { return x * y; }; let product = multiply(4, 6); console.log(product); // Output: 24 // Arrow function let divide = (m, n) => m / n; let quotient = divide(20, 4); console.log(quotient); // Output: 5

// Function with default parameters
function greet(name = "Guest") 
{ return `Hello, ${name}!`; } 
console.log(greet()); // Output: Hello, Guest! console.log(greet("Alice")); // Output: Hello, Alice!