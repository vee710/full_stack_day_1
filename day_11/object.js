console.log("monday");


//const studentname = "Vee";
//const studentage = 25;
//const studentcity = "Bangalore";
//const rollnumber = 2616400289;

const student = {
    name: "vee",
    age: 25,
    city: "Bangalore",
    rollnumber: 2616400289,

};

conmsole.log(student);
console.log(typeof student);


//READ 
console.log(student.name);
console.log(student["name"]);

//CREATE
student.country = "INDIA";
//student["country"] = "INDIA";

//UPDATE
student.city = "mumbai";
student["age"] = "18";

console.log(student);

//DElETE
delete student.rollnumber;