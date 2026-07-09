//condition is simply in javascript used tocheck what code to execute
//it executes the code based on the condition provided in the if statement


//IF STATEMENT
//it is used to check the condition and execute the code whwther its is true


let age = 18;

if (age>=18){
    console.log("You can vote");
}


let temperature = 35;
if(temperature>=30){
   console.log("it's a hot day"); 
}

//IF ELSE STATEMENT
//it isb used to check the consiotuon and execute the code whether it is true or false

 let age111 = 21;
 if (age111>=18){
    console.log("you are eligible to vote");
 }
    else {
        console.log("you are not eligible to vote");
    }


//another practice question

let marks  = 75;
if(marks>=40){
    console.log("You have passed the exam");

}else{
    console.log("You have failed the exam");
}


//ELSE IF STATEMENT
//it is used to check multiple conditions
//it execute the first true condition and ignore the rest of the condition..

let averageRun = 73;
if (averageRun>=90){
    console,log("You are gretest player as a Virat kohli");
}else if(averageRun>=80){
    console.log("you are a good player as ab devilliers");
}else if (averageRun>=70){
    console.log("you are a good player as a rohit sharma");
}else{
    console.log("you are a good batsmen");
}


//SWITCH STATEMENT
//it is used to check the multiple conditions based on the value it is given 


let day = 90;

switch(day){
    case 1:
        console.log("MOnday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");    
}