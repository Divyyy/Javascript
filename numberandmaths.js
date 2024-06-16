const score= 400
// console.log(score);

const balance = new Number(100.)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // gives decimical value upto the number you have written means 2 dala hai to . ke baad upto 2 digit


const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)) 
// gives precision value and number priorty before decimal 
const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));


// -------------MATH------------
console.log(Math);
//  console.log(Math.abs(-4));  // gives absolute value changes -ve to +ve only
//  console.log(Math.round(4.6)); // round off the value
//  console.log(Math.ceil(4.1)); // gives the uper value
//  console.log(Math.floor(4.1)); // gives the lower value
//  console.log(Math.min(4,3,6,8)); // gives the min value in  the array
//  console.log(Math.max(4,3,6,8)); // gives the max value in  the array
console.log(Math.random());// gives the random value in between 0 to 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);

