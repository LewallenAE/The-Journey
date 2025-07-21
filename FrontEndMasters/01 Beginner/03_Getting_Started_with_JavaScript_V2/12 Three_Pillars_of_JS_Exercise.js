class Bookshelf {
    constructor() {
        this.bookList = [];
    }

    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.bookList.push(bookName);
        }
    }

    printFavoriteBooks() {
        for (let i = 0; i < this.bookList.length; i++) {
            console.log(`Favorite book: ${i + 1} ${this.bookList[i]}`)
        }
    }    
}

const myBookShelf = new Bookshelf();

myBookShelf.addFavoriteBook("Dune");
myBookShelf.addFavoriteBook("The Apprentice");
myBookShelf.addFavoriteBook("You Don't Know JS");
myBookShelf.addFavoriteBook("The Great Gatsby");
myBookShelf.addFavoriteBook("Django");
myBookShelf.addFavoriteBook("Head First Java");
myBookShelf.addFavoriteBook("The Great White Hype");

myBookShelf.printFavoriteBooks();