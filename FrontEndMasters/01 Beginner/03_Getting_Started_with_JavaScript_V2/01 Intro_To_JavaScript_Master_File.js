/* In JavaScript there is no difference between floats and whole numbers */

42
3.14
"Hello, friend."  // String
true // boolean
false // boolean
null // null value
undefined // undefined value
[1, 2, 3, 4] // array
{name: "Anthony"} // object containing a key: value pair.

let name = "Anthony";  // Don't use var anymore, only let and const


// Programming Primer Exercise - no looking at solution

// Begin the breakdown of how a computer would run the code in teh background


let favoriteBookList = [];

function addFavoriteBook(bookName) {
    return bookName;
}

let addFavoriteBookIteration = [
    addFavoriteBook("A Song of Ice and Fire"),
    addFavoriteBook("The Great Gatsby"),
    addFavoriteBook("Crime & Punishment"),
    addFavoriteBook("Great Expectations"),
    addFavoriteBook("You Don't Know JS"),
    addFavoriteBook("The Great White Hype")
];

for (let i =0; i < addFavoriteBookIteration.length; i++) {
    let bookName = addFavoriteBookIteration[i];
    if (!(bookName.includes("Great"))) {
        favoriteBookList.push(bookName);
    };
}

console.log(favoriteBookList);


let favoriteBookList2 = [];

function addFavoriteBook2(bookName) {
    return bookName;
}
let addFavoriteBookIteration2 = [
    addFavoriteBook2("A Song of Ice and Fire"),
    addFavoriteBook2("The Great Gatsby"),
    addFavoriteBook2("Crime & Punishment"),
    addFavoriteBook2("Great Expectations"),
    addFavoriteBook2("You Don't Know JS"),
    addFavoriteBook2("The Great White Hype"),
    addFavoriteBook2("The Great White Shark"),
    addFavoriteBook2("Rumpelstiltskin"),
    addFavoriteBook2("Rumpelstiltskin and The Great Magician")
];

addFavoriteBookIteration2.forEach(bookName => {
    if(!bookName.includes("Great")) {
        favoriteBookList2.push(bookName);
    }
    
});

/* function favoriteBookListLiteral() {
    for (let i = 0; i < favoriteBookList2.length; i++) {
        console.log(`FavoriteBook: ${favoriteBookListLiteral[i]}`);
    }
} */

// Abstracted and modular to handle this in lesser script

// Function too add books

function addBookFavoriteList(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks3.push(bookName);
    }
}

function printFavoriteBooksList() {
    console.log(
        `Favorite Book: ${favoriteBooks3.length}`
    );

    let bookCount = 1;
    for (let i = 0; i < favoriteBooks3.length; i++) {
        console.log(`Favorite Book:${bookCount} ${favoriteBooks3[i]}`);
        bookCount++;
    }
    
}

let favoriteBooks3 = [];

addBookFavoriteList("A Song of Ice and Fire");
addBookFavoriteList("The Great Gatsby");
addBookFavoriteList("The Great White Hype");
addBookFavoriteList("The Pink Panther");
addBookFavoriteList("Clockwork Orange");
addBookFavoriteList("You Don't Know JS");

console.log(favoriteBooks3);
printFavoriteBooksList();



// Even more reusable with a parameter
function printFavoriteBooksList2(bookList) {

    let bookCount = 1;
    for (let i = 0; i < bookList.length; i++) {
        console.log(`Favorite Book:${i + 1} ${bookList[i]}`);
        bookCount++;
    }

    // for (let bookName of (your array here) {
    //            console.log(bookName);
    //}
    
}

printFavoriteBooksList2(favoriteBookList);
printFavoriteBooksList2(favoriteBookList2);
printFavoriteBooksList2(favoriteBooks3);



// all three of these will be undefind you have to create an empty string in the function with a variable and then 
// variable += `Favorite Book ${i + 1}: ${bookList[i]\n`}
// return variable;

// then console.log(printFavoriteBookList(favoriteBookList));
console.log("function printFavoriteBooksList2:", printFavoriteBooksList2(favoriteBookList));  
console.log("function printFavoriteBooksList2:", printFavoriteBooksList2(favoriteBookList2));
console.log("function printFavoriteBooksList2:", printFavoriteBooksList2(favoriteBooks3));