//Object is a collection of key value pairs
//Object is a non-primitive data type
//Object is a reference data type
//Object is a mutable data type
//Object is a non-ordered collection of key value pairs

//Object is a non-primitive data type because it is a reference data type and it is mutable
//Object is a reference data type because it is stored in heap memory and it is mutable
//Object is a mutable data type because we can change the values of the properties of the object
 
//primitive data types stored the actual value directly in the memory ,when assigned to another variable a copy of the value is created
//reference data types stored the reference of the object in the memory,when assigned to anotherr variable both variable point to the same object so changes made through one variable are visible through the other variable

//Object is a non-ordered collection of key value pairs because the order of the properties of the object is not guaranteed and it is not important
//properties of the object referred to as keys and values are referred to as values
//properties are stored in the heap memory and heap memory is used to store non-primitive data types and it is mutable
//heap memory is a non-contiguous memory location and it is used to store objects and arrays
//reference data types is also known as non-primitive data types because they are stored in heap memory and they are mutable
 

//primitive data types are stored in stack memory and stack memory is used to store primitive data types and it is immutable
//it is stored in contiguous memory locations and it is used to store function calls and local variables
//function calls means when a function is called, it is stored in stack memory and when the function is executed, it is removed from stack memory
//local variables means when a variable is declared inside the function, it is stored in stack memory and when the function is executed, it is removed from stack memory

//shallow copy cretaes a new object but nested object still shared through references
//deep  copy creates a compleetly independent copy of the object including all the nested objects


// let  a = 10;
// let b = a;
 
// b = 20;
//  console.log(a);
//  console.log(b);
 //primitive value copy the value , not the address of the value


 let person1 = {
    name: "Nitish"
 };

 let person2 = person1;
 person2.name = "Virat";
   
 console.log(person1);
 console.log(person2);

 let a ={
   x: 1
 };
 let b = a;
  b.x = 2;
  console.log(a);
  console.log(b);

  //object literals 

  const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Gorakhpur",
    email: "ritviknitish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
  }
console.log(JsUser.email)
console.log(JsUser["email"])

// JsUser.greeting = function(){
//   console.log("Hello JS User");

// }
// console.log(JsUser.greeting);


//freeze is used to block the properties that after using this  we canno modify anything what we have freezes

JsUser.email = "ritviknitish@18gmail.com"
Object.freeze(JsUser)
JsUser.email = "etheraeal.nitish@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
