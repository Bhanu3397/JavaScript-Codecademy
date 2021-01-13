// Variables:- a variable is a container for a value. You can think of variables as little containers for information that live in a computer’s memory.
// var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
var favoriteFood = 'pizza';
var numOfSlices = 8
console.log(favoriteFood)
console.log(numOfSlices)

// the 'let' keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value. 
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

// Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

// The const keyword was also introduced in ES6, and is short for the word constant.
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

// However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.
const entree = 'Enchiladas'
console.log(entree) // entree = 'Tacos' //Produces Type error

// Mathematical Assignment Operators 
let w = 4;
w = w + 1;
console.log(w); // Output: 5
// Another way to assign Mathamatical operators
let w = 4;
w += 1;
console.log(w); // Output: 5
// We also have access to other mathematical assignment operators: -=, *=, and /= which work in a similar fashion.
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// Examples of Mathamatical operators in Variables
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// Use the mathematical assignments in the space below:
levelUp +=5;
powerLevel -=100;
multiplyMe *=11;
quarterMe /= 4;
// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// The Increment and Decrement Operator
// Other mathematical assignment operators include the increment operator (++) and decrement operator (--).
let a = 10;
a++;
console.log(a); // Output: 11
let b = 20;
b--;
console.log(b); // Output: 19

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar ++;
lostDollar --;
console.log(gainedDollar)
console.log(lostDollar);

// String Concatenation with Variables
