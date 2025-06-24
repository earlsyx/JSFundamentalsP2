"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

//Function
// - piece of code that we can reuse over and over again in our code.

function logger() {
  //function body
  console.log("My name is Jonas");
}

logger(); //invoking, running, calling the function, executing
logger();
logger();

//receive data and return data back/ machines, food processor

//parameters defined once the function is called
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
} //parameters

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//not all function need to return somehing an not all need to have parameter or accept parameters
// block of code you want to reuse over and over again



//argument , actual value repalce parameter
const age1 = calcAge1(1991);
//Function declaration
//epresison returns a value, statement block of codes that does something
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//Function expression
//function without a name, anonymous funciton
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

//functions are just value
//diff between funciton declaration adn functino expression .
// you can call function declariton efore they are defined in the fcode
// can't because of hoisting
*/

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bobe"));
