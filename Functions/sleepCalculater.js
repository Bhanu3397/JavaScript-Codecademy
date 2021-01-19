// https://www.youtube.com/watch?v=48ko-s_ePbc&feature=emb_title
const getSleepHours = day =>{
    day = day.toLowerCase();
    switch(day){
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 8;
            break;
        case 'wednesday':
            return 8;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 8;
            break;
        case 'saturday':
            return 7;
            break;
        case 'sunday':
            return 14;
            break;
        default:
            return 'please enter a valid day';
            break;            
    }
}
// console.log(getSleepHours('sunday'))

const getActualSleepHours = () => 
    getSleepHours('Monday') + getSleepHours('Sunday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday');

// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    var idealHours = 8;
    return idealHours * 7
};
console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
 
console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        console.log('You got perfect amount of sleep');
    }
    if(actualSleepHours < idealSleepHours){
        console.log('You need sleep')
    }
    if(actualSleepHours > idealSleepHours){
        console.log('You slept more')
    }
};

calculateSleepDebt();