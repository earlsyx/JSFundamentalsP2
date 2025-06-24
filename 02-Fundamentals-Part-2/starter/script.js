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


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} peice of apples and ${orangePieces} piece of oranges`;
  return juice;
} //parameters

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retire  s in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} already retired`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Nash"));

//function body: block of code that we want to reuse. PRocesses the
//function input data,
// paramters: placeholders to receive input values. Like local variables of a funciton
// Function name
// return statement - to output a value from the function and terminate executiton
// calling cfunciton rniing onviking using ()
// arguments - acutal values of functino paramers to input data, age value variable to save return v alue function output



// FIRST data structures ARRAY
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

//Arrays and objeccts importantant
const friends = ["Micheal", "Steven", "Peter"]; // literral syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); //arrays 0 based
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //expression not stataement

//change or mutate

friends[2] = "Jay";
console.log(friends);
//const can't be change, but only primitive values can't.
// arrays aren't primitive valuel ike int, string etc.
// cause of how js stores things in memory

//can't replace entire array.
// friends = ['Bob','Alice']

const firstName = "Jonas";
const jonas = [firstName, "Schemdtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years1 = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years1)); //Not a Number NaN
const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[years1.length - 1]),
];
console.log(ages);

// built in functions to use with array called method

const friends = ["Micheal", "Steven", "Peter"]; // literral syntax
//Push Method
const newLength = friends.push("Jay");
console.log(friends); //muteated original array isnice not primitve.
console.log(newLength);

//Beginning, unshift method
friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop(); // Last Element
console.log(popped);
console.log(friends);

friends.shift(friends); //First element
console.log(friends);

//method that tells which position

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("BSA"));

//es6 method, includes

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a firend called Steven");
}


const jonasArray = [
  "Jonas",
  "Sch",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

//each of these keys are called property
// Object literal syntax
const jonas = {
  firstName: "Jonas",
  lastName: "Sch",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Micheal", "Peter", "Steven"],
};

//group different varaible tahat belong together
// diff is order doesnot matter when retrieving in object
// arrays matter order

//objets unstrucure data, data want to name.


const jonas = {
  firstName: "Jonas",
  lastName: "Sch",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Micheal", "Peter", "Steven"],
};
console.log(jonas);

//preorpty from an object , . notation

console.log(jonas.lastName); // . operator will go in the jonas object and retrieve property called lastname
console.log(jonas["lastName"]); // bracket notation  specify with preopty name or key, put any exprsssion soorpeation something hat produces avlue.

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

//when to use dot and bracket
//if you want to compute thep roepty name then bracket, otherwise just use dot notation

// const interestedIn = prompt(
//   "What do you want to know about Me, CHOOSE beteewen firstName, lastName, age, Job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

jonas.location = "Port";
jonas["Twitter"] = "@tst";
console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his best friend is called Micheal"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

//member access , comptuer memver access . and {}
*/
//Obejcts method

const jonas = {
  firstName: "Jonas",
  lastName: "Sch",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear; // function value
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear; // function value
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age; // function value
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
// Any function that is attached to an ojbe ct is called a method
// in every method js gives as access to a special variable called this
// this keyword is the variable that is basically equal to the object on which teh method is called
// so it is equal to the object calling the method
console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

console.log(jonas.age);

console.log(jonas.age);

console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

//arrays are also objec,ts they arejust speial kind of objects
// in other words they have methods that can manipulate them push pop, shift, unshift etc. built in
