//object destructuring is a way to extract values from object and assign them to variables
//it is done because we want to extract values from object and assign them to variables
//it is done by using the curly braces {} and the variable names should match the property names of the object

// const player = {
//     name:"Virat", age:37, country:"India"};
//     console.log(player.name);
//     console.log(player.age);

    //object destructuring

    const player = {
    name:"Virat", age:37, country:"India"};

    const{name, age, country} = player;
    console.log(name);

    const student = {
    name: "Nitish",
    age: 22,
    course: "MCA",
    city: "Gorakhpur"
};

const { name, course } = student;

console.log(name);
console.log(course);

//in first the output is Nitish and MCA in this the object contain many properties so by using object destructing we have ectracted the value by using the property name and assigned them a variable

const player = {
    name: "Virat",
    age: 37,
    country: "India"
};

const { name: playerName, country: playerCountry } = player;

console.log(playerName);
console.log(playerCountry);

//in the seconf=d the output is  virat and india and the propertyname is still the same name name and country but the variable name has been changed to playername and playercounrty
 
const file = {
    fileName: "resume.pdf",
    fileType: "PDF",
    fileSize: 2.5,
    location: "Laptop"
};

const { fileName, fileSize } = file;

console.log(fileName);
console.log(fileSize);


