class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
}

var book = new Book('title', 'pag', 'isbn');

console.log(book.title);
book.title = 'new title';
console.log(book.title);