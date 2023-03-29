"use strict";
// learning number 1 - confirma strictly

let answer1 = confirm("Are you ready to rumble?");

let me = 0;

if (answer1 === true) {
  console.log("let's Get Ready To Rumble");
} else {
  console.log("oh, Wll then");
}

// learning number 2 - logical operators

let first = true;
let second = false;
let third = true;

// both new to be true

if (first && third) {
  console.log("First and third were both true");
} else if (first || second) {
  console.log("First or second was true!");
} else if (third) {
  console.log("first and second were flase but third was true!");
} else {
  console.log("were any of my variables true?");
}

let color = prompt("What is your favourite colour?");

switch (color.toLocaleLowerCase()) {
  case "red":
    console.log("Your fav color is red!");
    break;
  case "blue":
    console.log("Your fav color is blue!");
    break;
  default:
    console.log("I don't know what your fav color was!");
    break;
}

let crane = prompt("Was lou ever a crane driver?(Please answer yes/no or y/n)");
if (crane.toLocaleLowerCase() === "yes" || crane.toLocaleLowerCase() === "y") {
  console.log("You're correct I have illegally driven a crane!!");
} else {
  console.log("You're wrong, I can drive a crane silly!");
}
