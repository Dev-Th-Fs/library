const myLibrary = [];
const container = document.querySelector(".container")

function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(author, title, pages, status) {
  const newBook = new Book(author, title, pages, status);
  myLibrary.push(newBook);
}

addBookToLibrary('abc','xyz', 12, 'not read');
console.table(myLibrary)

function createDomNodes(author){
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card")
  for(let i=1; i<=4; i++){
    const para = document.createElement("p");
    para.textContent = `Author: ${author}`
    container.appendChild(para)
  }

}

function display(){
  myLibrary.forEach(book => {
    createDomNodes(book.author)
  });
}

display()