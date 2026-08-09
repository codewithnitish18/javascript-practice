
//FUNCTION is a block of code that is designed to  to perform a particular task.
//it is executed when something call it....


// function sayMyName(){
//     console.log("Nitish");
// }

// sayMyName();
// sayMyName();
// sayMyName();


//practice

// function introduce(name,age){
// console.log( `my name is ${name} and i am ${age} years old.`);

// }
// introduce("Nitish",21);


// function myFavouritePlayer(player){
//     console.log(`absolute superstar of the game ${player} is the greatest player full stop any form of the game is the legend`);

// }

// myFavouritePlayer("Virat Kohli");

//parameters were made to make function more reusable with different data
//instead of makking of mdiffren tfubction for diffrent data we can write on function and pass diffrent arguments 


// function add(num1,num2){

//     console.log(num1 + num2);
// }

// add(10,20);
// add(50,30);
// add(100,200);

// let result = add(10,20);
// console.log(result); 

// function square(num){
//     console.log(num*num)
// }

// let total = square(5) + square(10);
// console.log(total);          

// function square(num){
//     return num*num
// }

// let total = square(5) + square(10);
// console.log(total);          



// function add(a,b){
//     return a + b;

// }
// function multiply(x){
//     return x * 2;

// }
// let answer = multiply(add(10,20));

// console.log(answer);


// function checkNumber(num){
//     if(num>0){
//         return "Positive"
//     }else if(num==0){
//         return "whole number"
//     }
//     else{
//         return "Negative"
//     }
     
// }

// console.log(checkNumber(24));
// console.log(checkNumber(-66));
// console.log(checkNumber(0));

//when a return executes the function immediately stops and send the value back to the caller..

// there going a function going to call another function


// function isPositive(num){
//     if(num>0){
//         return true
//     }else{
//         return false
//     }
// }

// function checkNumber(num){
//     if(isPositive(num)){
//         return "Positiver Number"
//     }else{
//        return  "Not Positive"
//     }
// }

// console.log(checkNumber(55));
// console.log(checkNumber(-8));

//TRUTHY 
//a value is truthy when javascript treats it like true in a condition
if(1){
    console.log("yes");
}