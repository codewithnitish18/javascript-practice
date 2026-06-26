const accountId = 1234567890;
let accountName = "Nitish";
var accountBalance = 1000;
accountCity = "New York";
let accountState;

//accountId = 9876543210;// not allowed as accountId is a constant
console.log(accountId);

accountName = "Virat";
console.log(accountName)
accountBalance = 2000;
console.log(accountBalance);
console.table({accountId,accountName,accountBalance,accountCity,accountState})

/*
prefer not to use var because of issue in block scope and functional scope.
 It can lead to unexpected behavior and bugs in the code. 
 Using let and const helps to avoid these issues and makes the code more predictable and easier to debug.

*/