let score = undefined;

// const {score} = req.body; // this will give error because score is already declared as a constant/  
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof(score));
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// If the value of score is not a number, then valueInNumber will be NaN (Not a Number)
// If the value of score is null, then valueInNumber will be 0
// If the value of score is undefined, then valueInNumber will be NaN (Not a Number)


let isLoggedIn = "Virat"; // 1 is truthy value in JavaScript
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let viratNumber = 18;
let stringNumber = String(viratNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));


//************************ Operations  *************************** */

let viratRun = 100;
let negativeRun = -viratRun;
console.log(negativeRun);

let newViratRun = -negativeRun;
console.log(newViratRun);

console.log(2+5);
console.log(5-8);
console.log(9/9);
console.log(2*6);
