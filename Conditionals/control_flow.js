// If Statement:- We often perform a task based on a condition.  (control flow)
if (true) {
    console.log('This message will print!'); 
  } // Prints: This message will print!

// let sale = true;
// sale = false;
// if(sale){
//     console.log('Time to buy!');
// }

// If...Else Statements :- If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false.
let sale = true;
sale = false;
if(sale) {
  console.log('Time to buy!');
}
else{
  console.log('Time to wait for a sale.')
}

// Comparison Operators
let hungerLevel = 7;
if(hungerLevel > 7){
  console.log('Time to eat!')
}else{
  console.log('We can eat later!')
}

let comfortFood = 'Tacos';
comfortFood = 'Burrito'
if(comfortFood === 'Tacos'){
  console.log("Let's dig in")
} else{
  console.log('I need Tacos')
}

let myValue = 100;
myValue += 15
if(myValue <= 100){
  console.log(`It's ${myValue}.`)
}else{
  console.log('My Value is changed.')
}

// Logical Operators
let stopLight = 'red'
let pedestrians = 10
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }

  let excited = true;
  console.log(!excited); // Prints false
   
  let sleepy = false;
  console.log(!sleepy); // Prints true

  let mood = 'sleepy';
  let tirednessLevel = 5;
  
  if(mood === 'sleepy' && tirednessLevel >8){
    console.log('time to sleep')
  }else{
    console.log('not bed time yet')
  }
  

// Truthy and Falsy:-
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment:- 
let tool = 'marker'; 
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen' // If tool was not assigned it uses 'pen' as a default value
console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator
let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
// Above is simplified to using Ternary Operator
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// Practice examples
let isLocked = false;
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favPhrase = 'Love That!';
if (favPhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

favPhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else If Statements:-
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
} else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
}else if(season ==='summer'){console.log('It\'s sunny and warm because it\'s summer!')}
else {
  console.log('Invalid season.');
}

// The switch keyword:-
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

let athleteFinalPosition = 'first place'; // if athleteFinalPosition is empty string('') then it'll print default case
switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}