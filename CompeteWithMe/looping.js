//looping means to repeat a same block of code untill the conditions becomes false

//FOR LOOP STATEMENT
//IT IS USED TO REPEAT a block if code for a specific number of times

for(let i = 0; i<=5; i++){
    console.log(i);
}

//for(intialization;condition;increment/decrement){
//code block to be executed
//}

//break stop the entire loop and exit the loop



for (let run = 0; run<=40;run++){
    console.log(run);
    if(run==18){
        break;
    }
}


//continue statement is used to skip the curent iteration of the loop and continue with the next iteration


for (let devlopment = 0;devlopment<=40;devlopment++){
    console.log(devlopment);
    if(devlopment == 35){
        continue;
  
    }
}


//WHILE LOOP STATEMENT is used when the number of iteration is unknown...
 let i = 10;
 while (i>=1){
    console.log(i);
    i--;
 }


 //DO WHILE LOOP STATEMENT is used to execute the code first and check the condition after executing the code block. it is used when we want to execute the code at least once.


 let n = 1;

 do{
    console.log(n);
    n++;
 }
while (n<=5);
 