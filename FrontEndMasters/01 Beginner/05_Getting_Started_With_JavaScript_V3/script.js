let myName = "Anthony";
console.log(`My name is: ${myName}`);
let tally = 0;
function countTally() {
  const _ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i of _ARR) {
    tally += i;
  }
  return tally;
}
console.log(`The tally total is: ${tally}`); // this is acting as expected because we are calling tally which is 0
// We need to call the function
console.log(`The total tally is: ${countTally()}`);

function multiply(x, y) {
  return x * y;
}

function doubleUp(z, funct) {
  return z * funct;
}

console.log(
  `The total of the two functions is: ${doubleUp(5, multiply(2, 5))}`,
);

function sumCallBack(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

function handleSum(sum) {
  console.log(sum);
}

sumCallBack(1, 2, handleSum);

// Exercise

/*
1. Create a function that takes three parameters: firstName, lastName, and callback
2. Create a full name variable by combining the first and last names
3. Passes the fullName to the callback function (which prepends) "Hello" to it)
4. Print out the return of the callback function

*/

function myFullName(firstName, lastName, callback) {
  return callback(firstName, lastName);
}

function greetMyFullName(fName, lName) {
  return `Hello! ${fName} ${lName}`;
}

console.log(myFullName("Anthony", "Lewallen", greetMyFullName));

function sum(a, b) {
  return a + b;
}

const sumArrow = (a, b) => {
  return a + b;
};

const fuName = (fName, lName, instruction) => {
  return `${instruction} ${fName} ${lName}`;
};

console.log(fuName("Anthony", "Lewallen", "Hello!"));

// Array

const alphArr = ["a", "b", "c", "d", "e"];

console.log(alphArr[2]);

// Object

const Anthony = {
  name: "Anthony",
  occupation: "Fullstack Engineer",
  coolness: "Infinite",
};

console.log(Anthony);

console.log(Anthony.occupation);
console.log(Anthony["occupation"]); // non preferred way.

const book = {
  Title: "You Don't Know JS",
  Author: "Kyle Simpson",
  yearPublished: 1996,
  publishYourBook: (book1) => {
    return `Publshing your book: ${book1}`;
  },
};
book.publishYourBook("Shitty Titty");
console.log(book, book.publishYourBook("Shitty Titty"));
console.table(book);

book.status = book.publishYourBook(book.Title);
console.log(book);

function checkAnimal(animalType) {
  if (typeof animalType !== "string") {
    console.log(`${animalType} is not a string: Expected string`);
    return;
  }
  if (animalType && animalType.trim()) {
    switch (animalType.trim().toLowerCase()) {
      case "dog":
        console.log(`The ${animalType} goes: WOOF!`);
        break;
      case "cat":
        console.log(`The ${animalType} goes: Meooww!`);
        break;
      case "cow":
        console.log(`The ${animalType} goes: Mooo!`);
        break;
      case "horse":
        console.log(`The ${animalType} goes: Neighh!`);
        break;
      default:
        console.log(`No match found for:, ${animalType}`);
        break;
    }
  } else {
    console.log("Input was empty or just a space!");
  }
}

checkAnimal("Dog");
checkAnimal(" ");
checkAnimal(" 2");
checkAnimal(" Dogeljklwemiov 2");
checkAnimal(2);

function checkAnimal(animalType) {
  // 1. The Defensive Guard
  if (typeof animalType !== "string") {
    console.log(`${animalType} is not a string: Expected string`);
    return;
  }

  // 2. The Sanitizer
  const cleanType = animalType.trim().toLowerCase();

  // 3. The Lookup Table (The "Math" Map)
  const sounds = {
    dog: "WOOF!",
    cat: "Meooww!",
    cow: "Mooo!",
    horse: "Neighh!",
  };

  // 4. The "Founder" Ternary
  cleanType && sounds[cleanType]
    ? console.log(`The ${animalType.trim()} goes: ${sounds[cleanType]}`)
    : console.log(
        `No match for: ${animalType} or input was empty or just a space`,
      );
}

// Tests
checkAnimal("Dog");
checkAnimal(" ");
checkAnimal(2); // 2 is not a string: Expected string
checkAnimal(" Dogeljklwemiov 2"); // No match for: Dogeljklwemiov 2

function printNumbers(num) {
  console.log(num);
  if (num >= 10) return;

  console.log("less than ten");
  printNumbers(num + 1);
  console.log("Greater than or equal to ten.");
}

printNumbers(1); // Will print Greater than or equal to ten 9 times.

/*

use recursion to count all files in a file system if we want.

function countFiles(item) {

if (item.type === "file") retutrn 1

let count = 0

for (const child of item.children) {
count += countFiles(child)
}
return count
}

console.log(countFiles(fileSystem))
*/

const data = [1, [2, 3], [4, [5, 6]], 7];

function findMax(arr) {
  let max = -Infinity;

  for (const item of arr) {
    if (Array.isArray(item)) {
      const subMax = findMax(item);
      max = Math.max(max, subMax);
    } else {
      max = Math.max(max, item);
    }
  }
  return max;
}

console.log(findMax(data));

//const theme1 =
// user && etc

// Optional Chaining

const user = {
  profile: {
    settings: {
      themse: "dark",
    },
  },
};

const theme2 = user?.profile?.settings?.theme;

user?.notify?.();

const allPositive = numbers.every((number) => {
  return number > 0;
});
console.log(allPositive);

const allLarge = numbers.every((number) => {
  return number > 3;
});

console.log(allLarge);
