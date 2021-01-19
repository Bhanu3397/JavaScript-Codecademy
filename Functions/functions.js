console.log(greetWorld()); // Output: Hello, World!

// Function Declarations
function greetWorld() {
  console.log('Hello, World!');
}

function getReminder(){
    console.log('Water the plants');
}
function greetInSpanish(){
    console.log('Buenas Tardes.');
}


// Calling a Function :-The code inside a function body runs, or executes, only when the function is called.
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
sayThanks(); //We call this function as many times as we want

// Parameters and Arguments:- 
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
}

sayThanks('Cole')

// Default Parameters
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
makeShoppingList()
makeShoppingList('banana','apple','orange')

// Return:-
function rectangleArea(width, height) {
    let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }
console.log(rectangleArea(5, 7)) //35

function monitorCount(rows,columns){
    return rows * columns
  }
  const numOfMonitors = monitorCount(5,4)
  console.log(numOfMonitors)

// Helper Functions:-

function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
getFahrenheit(15); // Returns 59

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) *200;
  }
  
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);

// Function Expressions:-
// Below function is called an anonymous function
const plantNeedsWater = function (day){
    if (day === 'Wednesday'){
      return true
    }else{
      return false
    }
  };
  
  console.log(plantNeedsWater('Tuesday'));

// Arrow Functions:-
const plantNeedsWater= (day) =>{
    if(day === 'Wednesday'){
      return true
    }else{
      return false
    }
  };
console.log(plantNeedsWater('Tuesday'))

// Concise Body Arrow Functions:-
const plantNeedsWater = day => day=== 'Wednesday' ? true : false;