//data types are the types of daat we can store in a variables
//it is divided on the basis of operations we can perform on them and how can we acces them

//primitive data types: these are the data types which are not objects and have no methods. they are immutable
//string, number, boolean, null, undefined, symbol,bigInt
//non-primitive data types: these are the data types which are objects and have methods. they are mutable
//object, array, function

const heroes = ["Virat kohli","Rajat patidar","Krunal pandya","Phil salt","Jitesh Sharma","Tim David"];
console.log(heroes);

let myObj = {
    name: "Virat",
    age: 36
}
console.log(myObj);

const myFunction  = function(){
    console.log("Hello Virat");
}

let century = null;
console.log(typeof(century));

console.log(typeof(myFunction));







//stack and heap memory: stack is used to store primitive data types and
//  heap is used to store non-primitive data types. stack is faster than heap because it is stored in contiguous memory locations and heap is stored in non-contiguous memory locations. stack is also used to store function calls and local variables. heap is used to store objects and arrays. when we create an object or an array, it is stored in heap and a reference to that object or array is stored in stack. when we access that object or array, we access it through the reference stored in stack. when we modify that object or array, we modify it in heap and the reference in stack remains the same. when we delete that object or array, it is deleted from heap and the reference in stack becomes null.

let myHeroName = "virat kohli";
let anotherName = myHeroName;


console.log(anotherName);
anotherName = "ab de villiers";
console.log(anotherName);