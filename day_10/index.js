//console.log("Hello from script");


//___________________VAR____________________________//
"use strict";

// unexpeted(use of variable before declaration) error will be thrown if we use strict mode
//console.log(c1);

// declaration, initialisation;
//var c1 = 90;

//redecleration, reinitialisation;
//var c1 = 100;

//re-assign;
//c1 = 70;

//console.log(c1);

//--------------------------------LET----------------------------------//
"use strict";

//declaration is alalowed but redecleration is not allowed in let
let c1 = 90;
console.log(c1);
//let c1 = 80; //redecleration error will be thrown

//re-assign is allowed in let
c1 = 70;

console.log(c1);

//-------------------------------CONST----------------------------------//
"use strict";

//declaration is alalowed but redecleration is not allowed in const
const c2 = 90;
console.log(c2);
//const c2 = 80; //redecleration error will be thrown

//re-assign is not allowed in const
//c2 = 70; //error will be thrown

console.log(c2);

