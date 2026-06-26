//dates 

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

//dates can be created in different ways
//date is used to work with dates and times in JavaScript
//it is a built-in object that provides methods for working with dates and times

// console.log(typeof myDate);

// //types of dates is object
// let myCreatedDate = new Date("27-08-2004")

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//timestamp is the number of milliseconds that have passed since January 1, 1970, 00:00:00 UTC
let newDate = new Date();
console.log(newDate.toLocaleString());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getFullYear());

