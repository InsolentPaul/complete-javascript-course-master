"use strict";
/* let js = "amaizing";
console.log(40 + 10 + 12 - 3);

let firstName = "Pete";
console.log(firstName);
console.log(firstName);
console.log(firstName); 

let test;
console.log(test);
console.log(typeof test);
test = "changed variable";
console.log(test);
console.log(typeof test);

console.log(typeof null);

// variables
const now = 2038
const ageJulia = now - 1991;
const agePaul = now - 1989;
console.log(ageJulia, agePaul);
console.log(ageJulia * 2, agePaul / 2, 2 ** 3);

const firstName = "Pete";
const lastName = "Kravchenko";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
console.log(x);

// comparison operators
console.log(ageJulia > agePaul);
console.log(ageJulia >= 20);

const now = 2038;
const ageJulia = now - 1991;
const agePaul = now - 1989;

console.log(now - 1991 < now - 1989);

let x, y;
x = y = 25 - 10 - 5; // = 10
console.log(x, y);

const averageAge = (ageJulia + agePaul) / 2;
console.log(ageJulia, agePaul);
console.log(averageAge); */

// CHALLENGE Time

/* 
Test Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Test Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

/* const massMark = 78; // kilos
const heightMark = 1.69; // meters
const massJohn = 92; // kilos
const heightJohn = 1.95; // meters

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

// book practice
console.log(`sum = ${1 + 2}`);
console.log("sum = " + (1 + 2));

let value = true;
value = String(value); 

// alert(typeof value);
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log(7 / 0);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);
let a = 3;
let b = 8;
console.log(b ** (1 / 2)); 

const workTime = prompt("what time is now?");
if (workTime < 9 || workTime > 18) {
  console.log("office closed");
} else {
  console.log("office open");
}

let tempUserName = 0;
const defaultUserName = "Pete";
const userName = tempUserName || defaultUserName || "no name";
console.log(userName);

let x = false || 3;
console.log(x);

const age = 98;
if (!(age >= 14 && age <= 90)) {
  console.log("OK!");
} else {
  console.log("DENIED");
}

const userLogin = prompt("Type your Username:", "");
if (userLogin == "admin") {
  const userPassword = prompt("Type your Password:", "");
  if (userPassword == "itsme") {
    alert("Hello Sir!");
  } else if (userPassword == "" || userPassword == null) {
    alert("CANCELED!");
  } else {
    alert("ERROR!");
  }
} else if (userLogin == "" || userLogin == null) {
  alert("CANCELED!");
} else {
  alert("ERROR!");
} 

console.log("check one two"); */

// 1.17 Strings and Template literals
console.log(`--- Strings and Template literals ---`);
const firstName = "John";
const job = "engineer";
const birthYear = 1989;
const year = 2022;

const person = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(person);

console.log(`test backticks`);

console.log("String with \n\
new line \n\
of lines");

console.log(`String
new line
easier`);

// 1.18. Taking Decisions: if / else Statements
console.log(`--- Taking Decisions: if / else Statements ---`);
const age = 15;

if (age >= 18) {
  console.log(`Pete can start driving licence 🤪`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Pete is too young. Wait for ${yearsLeft} years.`);
}

const yearBirth = 1989;
let century;
if (yearBirth <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// 1.19. Coding Challenge #2
console.log(`--- Coding Challenge #2 ---`);

const massMark = 78; // kilos
const heightMark = 1.69; // meters
const massJohn = 92; // kilos
const heightJohn = 1.95; // meters

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

console.log(
  `Mark's BMI ${markBMI.toFixed(2)} vs John's BMI ${johnBMI.toFixed(2)}`
);

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI ${markBMI.toFixed(2)} is higher than John's! ${johnBMI.toFixed(
      2
    )}`
  );
} else {
  console.log(
    `John's BMI ${johnBMI.toFixed(2)} is higher than Mark's ${markBMI.toFixed(
      2
    )}!`
  );
}

// 1.20 Type Conversion and Coercion
console.log(`--- Type Conversion and Coercion ---`);

// type conversion
const inputYear = "1989";
console.log(Number(inputYear)); // convert to number
console.log(inputYear + 18); // returns string
console.log(Number(inputYear) + 18);

console.log(Number("Pete")); // NaN
console.log(typeof NaN); // number

console.log(String(23)); // string "23"

// type coersion
console.log("I am " + 23 + " years old."); // "+" triggers coersion to string for number 23
console.log("23" - "10" - 3); // "-" triggers convertion to number for strings "23" and "10"
console.log("23" * "2"); // "*" and "/" converts everything to number, * / is pousible only for numbers

let n = "1" + 1; // "11"
n = n - 1; // 11 - 1
console.log(n); // 10

//1.21 Truthy and Falsy Values
console.log("--- Truthy and Falsy Values ---");

// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Pete")); // true
console.log(Boolean("")); // false

const money = 0;
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log(`Hight is defined`);
} else {
  console.log(`Height is undefined`);
}

// 1.22 Equality Operators: == vs. ===
console.log("--- Equality Operators: == vs. === ---");
const ageEqual = "18";
if (ageEqual === 18) console.log("Strict");
if (ageEqual == 18) console.log("Not strict");

// 1.23 Boolean Logic
console.log("--- Boolean Logic ---");
// 1.24 Logical Operators
console.log("--- Logical Operators ---");

const hasDriverLience = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLience && hasGoodVision); // &&
console.log(hasDriverLience || hasGoodVision); // ||
console.log(hasDriverLience && !hasGoodVision); // !

// if (hasDriverLience && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

const isTired = false; // C
if (hasDriverLience && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

// 1.25 Coding Challenge #3
console.log("--- Coding Challenge #3 ---");
// Making avaerage
function avaerageScore(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
// Making teams
const dolphins = avaerageScore(97, 112, 101);
const koalas = avaerageScore(109, 95, 106);
// Compare scores
if (dolphins > koalas && dolphins > 100) {
  console.log(`Dolphis is a winner with ${dolphins.toFixed(2)} scores`);
} else if (dolphins === koalas && dolphins >= 100) {
  console.log(`It's a DRAW with ${dolphins.toFixed(2)} scores!`);
} else if (dolphins < koalas && koalas > 100) {
  console.log(`Koalas is a winner with ${koalas.toFixed(2)} scores`);
} else {
  console.log("Data error :(");
}

// 1.26 The switch Statement
console.log("--- The switch Statement ---");

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; // no break - code will be executed fwd
  case "tuesday":
    console.log("Prepare videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// 1.27. Statements and Expressions
console.log("--- Statements and Expressions ---");

// 3+4 is expression because it produce the value
// 1989 is expression
// if(...) {...} else {...} is statement because it not produce any value

// 1.28 The Conditional (Ternary) Operator
console.log("--- The Conditional (Ternary) Operator ---");

const cond = 25;
cond >= 18 ? console.log("Let's drink") : console.log("You are too young"); // conditional operator is short statement, ternary because it has 3 parts

// Operator always produce value so it is expression
const drink = cond >= 18 ? "Let's drink" : "You are too young";
console.log(drink);

let drink2;
if (cond >= 18) {
  drink2 = "Let's drink";
} else {
  drink2 = "You are too young";
}

console.log(drink2);

console.log(`Can I drink with you? 
${drink}`);

// 1.29
