
//function is a block of code which performs a specific task. It is executed when "something" invokes it (calls it). 
//funtion is a reusable block of code that can be called multiple times throughout the program.
//it is consist of function name, parameters and function body. it can return a value or not return a value. it can take parameters or not take parameters. it can be called multiple times throughout the program.
//arguements are the values that are passed to the function when it is called. parameters are the variables that are used to store the values that are passed to the function when it is called. parameters are defined in the function definition and arguments are passed to the function when it is called.  




function sayMyName(){
console.log("N");
console.log("I");
console.log("T");
console.log("I");
console.log("S");
console.log("H");

}

sayMyName();
//parameter are variables used to store the values that are passed to the function when it is called. parameters are defined in the function definition 
// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
//}
// //arguemets are the values that are passed to the function when it is called. 
// const result =   addTwoNumbers(3, 6);
// console.log(result);

function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result;
    return num1 + num2
}

const result = addTwoNumber(5,7)
console.log( "result:", result);

function loginUserMessage(username){
    return `${username} , just Logged in`
}
const message = loginUserMessage("Nitish")
console.log(message);