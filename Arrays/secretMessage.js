let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
let lastItem = secretMessage.pop();
console.log(secretMessage.length);
let newWords = secretMessage.push('to','program')
let indexEasily = secretMessage.indexOf('easily')
secretMessage[indexEasily] = 'right'
console.log(secretMessage);
let removeFirst = secretMessage.shift();
let addFirst = secretMessage.unshift('programming');
let sliceMessage = secretMessage.splice(6,11,'know')
console.log(secretMessage.join(' '));