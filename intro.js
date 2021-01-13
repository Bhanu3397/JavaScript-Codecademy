// Data types in JavaScript  These are primitive datatypes
// Numbers
let num = 4;
num = 23.42; // you can re-assign "let" variables
// Strings. They can be defined in single quotes or double quotes
let str = "Lord Rama"
str = "125"
// Booleaen(True or False)
let bool = true;
bool = false;
// null. This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
let nothing = null;
// Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
let undef = undefined;
// Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

// -----------------------------------------------------------------------------------------------------------------------------
// We can write single-line comments with // and multi-line comments between /* and */.


// Object: Collections of related data.


// ------------------------------------------------------------------------------------------------------------------------
// console.log prints data to the screen.
console.log('JavaScript')
console.log(2011)
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)


// Arithmetic Operators

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0
console.log(3.5+28)
console.log(2021-1969)
console.log(65/240)
console.log(0.2708*100)

// String Concatenation
// Operators aren’t just for numbers! When a + operator is used on two strings, it appends the right string to the left string.
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')// Prints 'I love to code.'
console.log('front ' + 'space'); // Prints 'front space'
console.log('back' + ' space'); // Prints 'back space'
console.log('no' + 'space'); // Prints 'nospace'
console.log('middle' + ' ' + 'space'); // Prints 'middle space'
console.log('One' + ', ' + 'two' + ', ' + 'three!'); // Prints 'One, two, three!'
console.log('Hello'+'World') // HelloWorld
console.log('Hello'+' '+'World') // Hello World


// Properties:- When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. Every string instance has a property called length that stores the number of characters in that string. 
console.log('Hello'.length); // Prints 5
console.log('Teaching the world how to code'.length) // 30

// Methods:- Remember that methods are actions we can perform. JavaScript provides a number of string methods.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log('Codecademy'.toUpperCase()); //CODECADEMY
console.log('    Remove whitespace   '.trim()); // Remove whitespace

// Built-in Objects 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

console.log(Math.random()); // Prints a random number between 0 and 1
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50
console.log(Math.ceil(43.8));//returns the smallest integer greater than or equal to a decimal number.

// use Math.floor() to make the output a whole number.
console.log(Math.floor(Math.random()*100))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
console.log(Number.isInteger(2017))  // checks if a number is an integer.
