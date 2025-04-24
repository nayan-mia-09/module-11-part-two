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

// const person = new Object()

// person.name = "Nayan"
// person.age = 22
// person.city = "Faridpur"
// person.isStudent = true
// person.getInfo = () => {
//     return `My name is ${person.name}. I'm ${person.age} years old. I live in ${person.city}.`
// }

// console.log(person);
// console.log(person.getInfo());

// By using an Object constructor

function person(){
    this.name = "Nayan"
    this.age = 22
    this.city = "Faridpur"
    this.isStudent = true

    this.getInfo = () =>{
        return `Hello everyone myself ${this.name}. I'm ${this.age} years old. I live in ${this.city}.`
    }
}

const personInfo = new person()

console.log(personInfo);

console.log(personInfo.name);
console.log(personInfo.age);
console.log(personInfo.city);
console.log(personInfo.isStudent);
console.log(personInfo.getInfo());