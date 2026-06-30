//singleton object

// const tinderUser = new Object()
// console.log(tinderUser);

//non singelton object
const tinderUser = {}
tinderUser.id = "123bc"
tinderUser.name = "jack"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

 const regularUser = {
    email : "ritviknitish@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Virat",
            lastname: "kohli"
        }
    }
 }

 console.log(regularUser.fullname.userfullname.firstname);


 const obj1 = {1: "a" , 2: "b"}
 const obj2 = {3: "a" , 4: "b"}
//  const obj3 = Object.assign({}, obj1 , obj2)

 const obj3 = {...obj1, ...obj2}
 console.log(obj3);
 
 //aasign is used to copy all enumerable own properties from source code to target code
 
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 

  const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "virat"

}
 
// console.log(course.courseInstructor)

const{courseInstructor: instructor} = course
console.log(instructor);

{2}