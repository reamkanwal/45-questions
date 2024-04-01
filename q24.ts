// q24


// Tests for equality and inequality with strings
const string1: string = "Hello";
const string2: string = "World";

console.log("Equality test with strings:");
console.log(string1 === string2); // False
console.log("Inequality test with strings:");
console.log(string1 !== string2); // True

// Tests using the lower case function
const string3: string = "HELLO";
const string4: string = "hello";

console.log("Lowercase function test:");
console.log(string3.toLowerCase() === string4); // True

// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log("Equality test with numbers:");
console.log(num1 === num2); // False
console.log("Inequality test with numbers:");
console.log(num1 !== num2); // True
console.log("Greater than test:");
console.log(num1 > num2); // True
console.log("Less than test:");
console.log(num1 < num2); // False
console.log("Greater than or equal to test:");
console.log(num1 >= num2); // True
console.log("Less than or equal to test:");
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log("AND operator test:");
console.log(condition1 && condition2); // False
console.log("OR operator test:");
console.log(condition1 || condition2); // True

// Test whether an item is in an array
const array1: number[] = [1, 2, 3, 4, 5];

console.log("Inclusion test in array:");
console.log(array1.includes(3)); // True

// Test whether an item is not in an array
console.log("Exclusion test in array:");
console.log(!array1.includes(6)); // True
