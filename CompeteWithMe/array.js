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

let files = [
    {
        name: "resume.pdf",
        type: "pdf"
    },
    {
        name:"photo.jpg",
        type:"Image"
    },
    {
        name:"notes.pdf",
        type:"pdf"
    }
];
for (let i = 0;i< files.length; i++){
    console.log(files[i].name);
}

let players = [
     {  name: "Virat",
        age: 37,
        country:"India"
    },
    {
        name:"Rohit",
        age: 39,
        country:"India"
    },
    {
        name:"Ab devilliers",
        age:42,
        country: "South africa"
    }

]
for (let i = 0; i < players.length; i++){
    console.log(players[i].name + "-" + players[i].country);
}

//filtering data