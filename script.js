const myLibrary = [];
const container = document.querySelector(".container");

Book.prototype.changeStatus = function () {
  book.status = book.status == "read" ? "not read" : "read";
};

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

addBookToLibrary("abc", "xyz", 12, "not read");

function createDomNodes(book) {
  const data = [
    `Author: ${book.author}`,
    `Title: ${book.title}`,
    `Pages: ${book.pages}`,
    `Status: ${book.status}`,
  ];
  console.table(data);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  
  for (let i = 0; i < 4; i++) {
    if (i == 3) {
      const statusContainer = document.createElement("div");
      const para = document.createElement("p");
      const statusButton = document.createElement("button");

      statusContainer.classList.add("statusContainer");
      statusButton.classList.add("statusButton");

      para.textContent = ` ${data[i]}`;
      statusButton.textContent = "X";

      statusContainer.append(para, statusButton);
      cardContainer.appendChild(statusContainer);
    } else {
      const para = document.createElement("p");
      para.textContent = ` ${data[i]}`;
      cardContainer.appendChild(para);
    }
  }
  container.appendChild(cardContainer);
}

function display() {
  myLibrary.forEach((book) => {
    createDomNodes(book);
  });
}

display();
