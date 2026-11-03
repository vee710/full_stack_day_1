//function declaration 
// function greet(userName) {
    
//     console.log(`Hello,${userName}!`);
// }

// // invocation/RUN 
// greet("Ajay");
// greet("Anuj");
// greet();

// //question//
// const EXCHANGE_RATE = 100;

// function printPrice(item, usd) {
//     const inr = Math.round(usd * EXCHANGE_RATE);
//     console.log(`${item} : ${inr}`);
// }

// printPrice("Honey Jar", 6.99);
// printPrice("Kiwi", 2.49);

//----------------------------------------------//

function sum(a, b) {
return a + b;
}
let answer = sum(2, 3);
console.log(answer);
console.log(sum(10, 20) * 2);

//-------------------------------------------//

function check() {
return "done";
console.log("Will this print?");
}
console.log(check());

//----------------------------------------------//


function greet (name = "vee", city= "delhi") {
    console.log(`${name} lives in ${city}`);
}
greet();
greet("ajay");
greet(undefined,"pune");
greet ("ajay","jaipur");

