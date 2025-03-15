//  Operaters

//* Arthmetic Operators
// Addition (+), Subtraction (-), Multiplication(*), Division(/), and remainder(modules %)
let sum = 30 + 20;
// console.log(sum)

let sub = 20 - 10;
// console.log(sub)

let mul = 10 * 3;
// console.log( mul)

let div = 10 / 3;
// console.log(div);

let rem = 10 % 3;
// console.log(rem);

//* Assignment Operator
// =, +=, -=, *=, /=, %=

let count = 5;
count += 3;
// console.log(count);

let subs = 10;
subs -= 6;
// console.log(subs);

// * Comparison Operators
// ==(equal to) ===(exactly equal to), !=(not equal to), !==(not exactly equal to), <(less than), >(greater than)
// <=(less than equal to) >=(greater than equal to) 


const num1 =5;
const num2 =10;

console.log(num1==num2);
if(num1==num2){
    console.log("Both number is equal");
}
else{
    console.log("Number is not equal")
}

const num3 = 3;
const num4 = "3";
console.log(num3 === num4)

const letter = "A";
console.log(letter == "A")

// Using if
// let grade = "A";
// if(grade === "A"){
//     console.log("You are excelent");
// }

//Using if else
let grade = "A";
if(grade === "A"){
    console.log("Grade is A")
}
else{
    console.log("Your grade is not A");
}


//Using if - else if - else
const score = 10;
if(score >= 90){
    console.log("Your grade is A")
}
else if(score >= 80){
    console.log("Your grade is B");
}
else if(score >= 60){
    console.log("Your grade is C");
}
else if(score >= 40){
    console.log("Pass");
}
else{
    console.log("You are fail");
}

// Using Nexted if else

let user="tahirsaifi09";
let pass=123;
if(user === "tahirsaifi09"){
    if(pass===123){
        console.log("Log in successfully");
    }
    else{
        console.log("Invalid password!");
    }
}
else{
    console.log("Invalid User");
}