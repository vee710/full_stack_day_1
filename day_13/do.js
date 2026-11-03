// let i = 0;
// while(i<10){
//     console.log("Hello world!");
//     i++;
// }

//-----------------DO-WHILE-LOOP----------------------//

// let i = 0;

// do{
//     console.log("yoo");
//     i++;

// }while(i<8);

//----------------prompt-func--------------------------//

// let a = prompt("write your name");
// console.log(a);

// let a = prompt("write your age"); // results in NaN(not a number) if any words are included in input except a number.
// a = Number(a);
// console.log(a);

// let a = prompt("write your age"); //smart enough to take up only number from the input
// a = ParseInt(a);
// console.log(a);

// let a = prompt("write your age"); //takes up the decimal part of the func in the output
// a = ParseFloat(a);
// console.log(a);

//alert("yoo js stfu"); // geta a alert pop up 

// let firstname = prompt("write your name");
// console.log("your first name is");
// alert("your first name is", firstname); //doesnt get printed the console

// let firstname = prompt("first name");

// alert (`hello ${firstname}welcome to my app`); // THE RIGHT WAY print aur alert dono hojata hai


//--------------------------problem-1---------------------------//
let a = prompt("Enter your expense");
let totalIncome = 0;
while(a!="done"){
    totalIncome = totalIncome + parseFloat(a);
    a = prompt("Enter your expense");
}
alert(`total income is ${totalIncome}`);


//--------------------------pronlem-2----------------------------//









