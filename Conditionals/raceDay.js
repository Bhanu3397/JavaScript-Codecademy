let raceNumber = Math.floor(Math.random() * 1000); 
let registredEarly = false;
var runnerAge = 18;
if(registredEarly && runnerAge > 18){
    raceNumber += 1000;
}
if(registredEarly && runnerAge >18){
    console.log(`The race will start at 9:30 am and race number is ${raceNumber}`);
}
else if(registredEarly && runnerAge >18){
    raceNumber = raceNumber
    console.log(`Late adults run at 11:00 am and your race number is ${raceNumber}`);
}
else if(runnerAge < 18){
    console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}
else{
    console.log('please visit registration desk');
}


//  Practice Example
let weather = "spring";
let clothingChoice = "";
 
if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);

let runTime = 35;
let runDistance = 3.5;
 
if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else {
  console.log("Keep on running!");
}