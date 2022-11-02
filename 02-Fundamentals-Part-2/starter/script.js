// Section 3: JavaScript Fundamentals - Part 2
//2.32 Activating Strict Mode
"use strict"; // strict mode

console.log(`--- Activating Strict Mode ---`);

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // error here
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // error because Audio is reserved
// const private = 456; // error because private is reserved
// const if = 23; // error

//2.33 Functions
console.log(`--- Functions ---`);

function logger() {
  console.log(`My name is Paul`);
}

// calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 7);
console.log(appleJuice);
console.log(fruitProcessor(5, 7));

const juice2 = fruitProcessor(2, 10);
console.log(juice2);

// 2.34 Function Declarations vs. Expressions
console.log(`--- Function Declarations vs. Expressions ---`);

// Function declaration
function calcAgeOne(birthYear) {
  return 2037 - birthYear;
}

const ageOne = calcAgeOne(1989);
console.log(ageOne);

// Function expression

// const ageTwo = calcAgeTwo(1988); // error will be here

const calcAgeTwo = function (birthYear) {
  return 2037 - birthYear;
};

const ageTwo = calcAgeTwo(1988);
console.log(ageOne, ageTwo);

// 2.35 Arrow Functions
console.log(`--- Arrow Functions ---`);

const calcAgeThree = (birthYearArrow) => 2037 - birthYearArrow;

console.log(calcAgeThree(1986));

// or

const ageThree = calcAgeThree(1986);
console.log(ageThree);

const yearsUntilRetirement = (birthYearArrow, firstName) => {
  const age = 2037 - birthYearArrow;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1984, "Alex"));
console.log(yearsUntilRetirement(1981, "Bob"));
console.log(yearsUntilRetirement(1987, "Pete"));

//2.36 Functions Calling Other Functions
console.log(`--- Functions Calling Other Functions ---`);

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitMachine(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitMachine(2, 3));

// 2.37 Reviewing Functions
console.log(`--- Reviewing Functions ---`);

const calcAgeRev = function (birthYearArrow) {
  return 2037 - birthYearArrow;
};
const yearsUntilRetirementReview = function (birthYearArrow, firstName) {
  const age = calcAgeRev(birthYearArrow);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log("this will be logged to console"); // alt + up arrow
    return retirement;
    console.log("this won't be logged to console");
  } else {
    return -1;
    console.log("this also won't be logged to console");
  }
};

console.log(yearsUntilRetirementReview(1987, "Peter"));
console.log(yearsUntilRetirementReview(1950, "Mike"));
