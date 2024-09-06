// Primitive Datatypes

// String
let name = "John Doe"; 
console.log("String:", name); // Output: John Doe

// Number
let age = 25;
console.log("Number:", age); // Output: 25

// Boolean
let isStudent = true;
console.log("Boolean:", isStudent); // Output: true

// Null
let emptyValue = null;
console.log("Null:", emptyValue); // Output: null

// Undefined
let undefinedValue;
console.log("Undefined:", undefinedValue); // Output: undefined

// Symbol (unique identifier)
let uniqueId = Symbol('id');
console.log("Symbol:", uniqueId); // Output: Symbol(id)

// BigInt (for large integers)
let largeNumber = BigInt(9007199254740991);
console.log("BigInt:", largeNumber); // Output: 9007199254740991n

// Non-Primitive Datatypes

// Object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
};
console.log("Object:", person); 
// Output: { firstName: 'John', lastName: 'Doe', age: 30, isStudent: false }

// Array (a type of object)
let colors = ["red", "green", "blue"];
console.log("Array:", colors); 
// Output: ['red', 'green', 'blue']

// Function
function greet() {
    return "Hello, world!";
}
console.log("Function:", greet()); // Output: Hello, world!
