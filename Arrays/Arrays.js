// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

// Create an Array:-
const hobbies=['playing carroms','watching movies','writing short stories']
console.log(hobbies);

// Accessing Elements:-
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Update Elements:-
let groceryList = ['bread', 'tomatoes', 'milk'];
console.log(groceryList)
groceryList[1]='avocados' // updating the value
console.log(groceryList);// after the update

// Arrays with let and const:- 
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo'
console.log(condiments);
condiments = ['Mayo']
console.log(condiments)
utensils[3] = 'Spoon'
console.log(utensils)
// utensils = ['Spoon'] //Throws error because we can't re-assign a const variable

// The .length property:-
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); //3

// The .push() Method:-
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('cutting grass','sweeping floors');
console.log(chores);

// The .pop() Method:-
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
var firstItem = groceryList.shift()
console.log(groceryList);
groceryList.unshift('popcorn')
console.log(groceryList);
console.log(groceryList.slice(1,4)) // Slice is non-mutating.
console.log(groceryList)
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex); // if something which is not in list will identified as -1 

// Arrays and Functions:-
const flowers = ['peony', 'daffodil', 'marigold'];
function addFlower(arr) {
  arr.push('lily');
}
addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
function removeElement(newArr){
  newArr.pop();
};
removeElement(concept)
console.log(concept);

// Nested Arrays:-
let numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1] //way to access the nested values 
console.log(target) //6 

