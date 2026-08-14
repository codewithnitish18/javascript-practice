// let players = ["Rohit", "Dhoni", "AB"];
//  players.unshift("Virat");
//  players.shift();
//  console.log(players);


 //INCLUDES
 //it is used to find the find the element in a array
 //so basically include is usedto check whether the elemnent ias present or exist in the array


//   let files = ["resume.pdf", "photo.jpg", "notes.pdf"];
//   console.log(files.includes("resume.pdf"));

//   let players = ["Virat","Rohit","Dhoni","AB"];
//   console.log(players.includes("Virat"));
//   console.log(players.includes("Sachin"));

//INDEXOF
//sometimes we dont want that something exist or not we also want that where it is exist and and where it is so it iis used to tell whher it is

// let files = ["resume.pdf", "photo.jpg", "notes.pdf", "project.zip"];
// console.log(files.indexOf("notes.pdf"));
// console.log(files.indexOf("abc.pdf"));
// console.log(files.includes("project.zip"));

//SLICE  
//it is used to take out a portion of an araay without changing the original array

// let players = ["Virat","Rohit","Dhoni","AB","Sachin"];
//  let SelectedPlayers = players.slice(1,4);
//  console.log(SelectedPlayers);
//  console.log(players);

//   let reservedPlayers = players.splice(1,4);
//   console.log(players);

// let files = ["resume.pdf", "photo.jpg", "notes.pdf", "project.zip"];

// files.splice(1, 2);

// console.log(files);

//spice is used to remove gthe selecetd portion and alsio vhanges the original araay

// //array containing multiple objects
// let students = [
//     {
//         name:"Niitsh",
//         age:22
//     },
//     {
//         name:"Rahul",
//         age: 23
//     }
// ];
// console.log(students);



//filtering data

// let files = [
//     {
//         name: "college.jpg",
//         type: "image",
//         location: "College"
//     },
//     {
//         name: "resume.pdf",
//         type: "document",
//         location: "Laptop"
//     },
//     {
//         name: "trip.jpg",
//         type: "image",
//         location: "Goa"
//     }
// ];

// for( let i = 0; i < files.length; i++){
//     if (files[i].type === "image"){
//         console.log(files[i].name);
//     }
// }


//filter
// it is used to create a new array containing only the elements that satisfy a condition


// let numbers = [10,20,30,45,55,65];
// let evenNumbers = numbers.filter(function(num){
//     return num % 2 === 0;
// });
// console.log(evenNumbers);



// let files = [
//     {
//         name:"college.jpg", type: "image"
//     },
//     {
//         name:"resume.pdf", type:"document"
//     },
//     {
//         name:"trip.jpg", type:"image"
//     }
// ];

// let images = files.filter(function(file){
//     return file.type === "image";
// });

// console.log(images);


// let players = [
//     {name:"Virat", age:37},
//     {name:"Rohit", age:39},
//     {name:"AB", age:42},
//     {name:"Gill", age:26}
// ];
// let youngPlayers = players.filter(function(player){
//     return player.age < 35;
//         //player.age is used to access the age property in the  current object
// })

// console.log(youngPlayers);


//players
//    ↓
// filter()
//    ↓
// takes each object → player
//    ↓
// player.age
//    ↓
// check age < 35
//    ↓
// true  → keep object
// false → discard object


//MAP 
//it is used to extract something from every player
// filter() → "Which elements should I keep?"
// map()    → "What should I get/create from each element?"


// let players = [
//     {name:"Virat", age:37},
//     {name:"Rohit", age:39},
//     {name:"AB", age:42},
//     {name:"Gill", age:26}
// ];

// let names = players.map(function(player){
//     return player.name;
// })
// console.log(names);

// let experiencedPlayers = players.filter(function(player)
// {
//     return player.age > 35;
// });

// console.log(experiencedPlayers);

// let ages = players.map(function(player)
// {
//     return player.age;

// })
// console.log(ages);


// let players = [
//     { name:"virat",age:37},
//     {name:"rohit", age:39},
//     {name:"AB", age:42},
//     {name:"Gill", age:26}    
// ];

// let experiencedPlayer = players.filter(function(player)
// {
//     return player.age > 35;
// })
// .map(function(player)
// {
//     return player.name
// })

  
// console.log(experiencedPlayer);

//FOR EACH
//run this function once for every element in the array


// let names = ["Virat","Rohit","AB"];
//  players.forEach(function(player,index){
//     console.log(index, player);
//  });


//  let files = ["resume.pdf", "photo.jpg", "notes.pdf"];
//  files.forEach(function(file,index){
//     console.log("file",index +":" ,file);
//  });

 //a callback is a function that is passed as an arguement to another function and it is executed after some kind of operaton performed


//  function add (a,b){
//     return a+b;
//  }
 

//  const add = (a,b) => {
//     return a+b;
//  };

//  const square = (num) => {
//     return num * num;
//  }
//  console.log(square(10)); 


//  let numbers = [1,2,3,4,5];
//  let squares = numbers.map((num) => {
//   return num * num;
//  });
//  console.log(squares);

const numbers = [2, 4, 6];

const result = numbers.map((num) => {
   return num * 2;
});
 console.log(result); 
