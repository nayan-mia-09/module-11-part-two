// Object Oriented Programming (OOP)

// Creation Using Object Literal

let person = {
    name: "Nayan",
    age: 22,
    city: "Faridpur",
    isStudent: true,

    getInfo: function(){
        return `My name is ${person.name}.`
    }
}

console.log(person.getInfo());