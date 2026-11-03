//----------cube-of-n------------//
// function cubeNumber(n){
//     return n*n*n;
// }
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));

// let n = parseInt (prompt("Enter a Number"));
// const cubeOfN = cubeNumber(n);
// alert (`cube of ${n} is ${cubeOfN}`);

//-------age-eligibility-------//
// function isAdult(age){               //function-declaration
//     if (age<=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let n = parseInt (prompt("Enter your age"));        //user-input
// let isAllowed = isAdult(n)                         //call-function
// alert(isAllowed);                               //output-display

//---------BMI-------//
// function calculateBMI(weight, height) {
//     let bmi = weight / (height * height);
//     return bmi;
// }

// let result = calculateBMI(70, 1.75);
// console.log(result); 
// //console.log(bmi); 

//-------grade-checker------//
// function gradeFromMarks(marks){
//     if (marks >= 90){
//         return "A";
//     } else if (marks >= 75){
//         return "B";
//     } else if (marks >= 50){
//         return"C";
//     } else {
//         return "F";
//     }
// }

// let m = parseInt(prompt("Enter marks"));
// let grade = gradeFromMarks(m);
// alert(grade);


//------discount-------//
// function applyDiscount(price, isNumber = false){
//     if(isNumber){
//         return price - 0.1 *price;
//     } else{
//         return price;
//     }
// }
// let x = prompt("Are you a member(Y/N)");
// let isMember;
// if(x=="Y"){
//     isMember = true;
// } else{
//     isMember = false;
// }
// console.log(applyDiscount(500,1));


//------vowels-------//
function countVowels(word){
    let count = 0;
    let i = 0;
    while (i<word.length) {
        if (
            word[i] == "a" ||
            word[i] == "e" ||
            word[i] == "i" ||
            word[i] == "o" ||
            word[i] == "u"
        ){
            count++;
        }
        i++;
    }
 return count;
}

console.log(countVowels("Cauliflower"));