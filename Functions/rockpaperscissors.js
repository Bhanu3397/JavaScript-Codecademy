// https://www.youtube.com/watch?v=cKbN6-1ZQ3A&feature=emb_title
const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }else{
        console.log('Please enter a valid input')
    }
};
// console.log(getUserChoice('Paper')); // should print 'paper'
// console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`

const getComputerChoice =()=>{
    let dice = Math.floor(Math.random()*2);
    switch(dice){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};
// console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'

const determineWinner = (getUserChoice,getComputerChoice) =>{
    if (getUserChoice===getComputerChoice){
        return 'Game is tie'
    }
    if(getUserChoice === 'paper'){
        if (getComputerChoice === 'scissors'){
            return 'Computer won!'
        }else{
            return 'User won!'
        }
    }
    if(getUserChoice === 'rock'){
        if(getComputerChoice === 'paper'){
            return 'Computer won!'
        }else{
            return 'User Won!'
        }
    }
    if(getUserChoice === 'scissors'){
        if(getComputerChoice === 'rock'){
            return 'Computer won!'
        }else{
            return 'User Won!'
        }
    }
    if(getUserChoice ==='bomb'){
        console.log('User won!')
    }
};

// console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = ()=>{
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice();
    console.log(`User choice is ${userChoice}`)
    console.log(`Computer choice is ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
}
playGame();