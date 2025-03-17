//* browser
// let name = prompt("Enter your name");
// console.log("Hello " + name);

// let userName = "Tahir";
//    alert("Welcome, " + userName + "!"); 


// Object is a real world entity that has some nature feature and behaviour

const person = {
    firstName:"Deepak",
    lastName:"Sharma",
    age:23,
};

// console.log(person)

const car = {
    color:"Red",
    model:"BMW",
    year:2020,
    isNew: true,
}

const car2 = {
    color:"Blue",
    model:"Swift",
    year:2024,
    isNew:true,

}

// console.log(car);
// console.log(car2.color);
// console.log(car2)

// Adding new key
// car.size = 24;

//* Delete key

delete car.isNew;
console.log(car["color"])

