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


let numbers = [10,20,30,45,55,65];
let evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});
console.log(evenNumbers);



let files = [
    {
        name:"college.jpg", type: "image"
    },
    {
        name:"resume.pdf", type:"document"
    },
    {
        name:"trip.jpg", type:"image"
    }
];

let images = files.filter(function(file){
    return file.type === "image";
});

console.log(images);