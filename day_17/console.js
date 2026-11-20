// window.console.log("drake");
// window.alert("ye");
// const h ="ok";
// console.log(window);

// "use strict";
// let age = prompt("what is yo no?");
// alert( "hello" + age * 2 );

console.dir(window.document);

console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.children[1].children);
console.log(document.body.children[1].children[0]);

const res = document.querySelectorForAll("ul p");
console.log(res);

const heading = document.getElementById("item-2");
console.log(heading);

const items = document.getElementByClassName("item");
items[1].style.color = "maaron";
console.log(items);

//const secondItem = document.getElementById("item-2");
//secondItem.style.color = "pink";

const b = document.querySelector("body");
b.innerText = "<h1>Hello &copy;</h1>";
b.innerHTML = "<h1>Hello &copy;</h1>";
// note.innerText = "Price in <i>USD</i>";
// note.innerHTML = "Price in <i>USD</i>";
 
