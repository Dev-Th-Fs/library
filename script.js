const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(){
    myLibrary.map((book) => {
        book.title
    })
}


const book1 = new Book("abc", "xyz", 50, "Not read");
addBookToLibrary(book1);

console.table(myLibrary);
