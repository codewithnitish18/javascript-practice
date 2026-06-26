//arrays
//arrays are used to store multiple values in a single variable
//arrays are ordered collections of values
//arrays can store values of different types
//javascript array are resizable

const myArray = [1,2,3,4,5,];
console.log(myArray[0]);

//Array Methods
//push method is used to add an element at the end of the array
myArray.push(6);
myArray.push(7);
console.log(myArray);
//Pop method is used to remove the last element from the array
myArray.pop(3);
console.log(myArray);

//unshift method is used to add an element at the beginning of the array
myArray.unshift(9);
console.log(myArray);

//shift method is used to remove the first element from the array
myArray.shift();
console.log(myArray);

console.log(myArray.includes(8));
//Inc ludes method is used to check if an element is present in the array or not. it returns true if the element is present in the array and false if the element is not present in the array.



console.log(myArray.indexOf(8));
//indexOf method is used to find the index of an element in the array. it returns the index of the first occurrence of the element in the array and -1 if the element is not present in the array.

const newArray = myArray.join();
console.log(myArray);
console.log(newArray);
//Join method is used to join all the elements of the array into a string

//slice method is used to extract a portion of the array and return a new array. it does not modify the original array
const slicedArray = myArray.slice(2,4);
console.log(slicedArray);
console.log(myArray);

console.log("A" , myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);
 //splice method is used to contain the range of the araay.and also it changes the original array