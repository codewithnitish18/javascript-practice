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


let day = 5;

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



//we use switch statement when we need to compare thevariabkle againsr a fixed values,it makes the code more cleaner and readable
//readability and maintainability of the code is improved when we use switch statement instead of if else statement



let role = "virat";
switch(role){
    case "admin":
        console.log("Full Access");
        break;
    case "student":
        console.log("access to view the student courses");
        break;
    case "teacher":
        console.log("access to view the teacher portal");
        break;       
    case "guest":
        console.log("access to view the guest portal");
        break;
    default:
        console.log("Invalid role")
}