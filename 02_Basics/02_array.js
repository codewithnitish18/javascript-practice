const  marvel_heroes = ["Thor","Iron-main,","SpiderMan"]
const dc_Heroes = ["SuperMan","batman","flash"]

// marvel_heroes.push(dc_Heroes)
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_Heroes)
console.log(allHeroes);
//spred operator is used to merge two arrays into one array
//it is denoted by three dots (...)
//it is used to spread the elements of an array into another array
const allHeroes2 = [...marvel_heroes,...dc_Heroes]
console.log(allHeroes2);

const another_Array = [1,2,3,[3,4,[5,6,7]]]
const real_another_Array = another_Array.flat(2);
console.log(real_another_Array);

//flat method is used to flatten an array. it takes an argument which is the depth of the array. if we pass infinity as an argument, it will flatten the array completely.hub