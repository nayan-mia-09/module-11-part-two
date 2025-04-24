// Object Oriented Programming (OOP)

// Creation Using Object Literal

// let person = {
//     name: "Nayan",
//     age: 22,
//     city: "Faridpur",
//     isStudent: true,

//     getInfo: function(){
//         return `My name is ${person.name}.`
//     }
// }

// console.log(person.getInfo());

// Creation Using Object Instance 

const person = new Object()

person.name = "Nayan"
person.age = 22
person.city = "Faridpur"
person.isStudent = true
person.getInfo = () => {
    return `My name is ${person.name}. I'm ${person.age} years old. I live in ${person.city}.`
}

console.log(person);
console.log(person.getInfo());