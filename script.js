const myLibrary = [];
const container = document.querySelector(".card-container");

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
addBookToLibrary("qwe", "xyz", 12, "not read");
addBookToLibrary("rty", "xyz", 12, "not read");
addBookToLibrary("uio", "xyz", 12, "not read");

function createDomNodes(book, index) {
  const data = [
    `Author: ${book.author}`,
    `Title: ${book.title}`,
    `Pages: ${book.pages}`,
    `Status: ${book.status}`,
  ];
  console.table(data);
  const cardContainer = document.createElement("div");
  const deleteButton = document.createElement("button");

  cardContainer.classList.add("card");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteCard);

  deleteButton.setAttribute("data-index", index);

  for (let i = 0; i < 4; i++) {
    if (i == 3) {
      const statusContainer = document.createElement("div");
      const para = document.createElement("p");
      const statusButton = document.createElement("button");

      statusContainer.classList.add("statusContainer");
      statusButton.classList.add("status-Button");

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
  cardContainer.appendChild(deleteButton);
  container.appendChild(cardContainer);
}

function display() {
  myLibrary.forEach((book, index) => {
    createDomNodes(book, index);
  });
}

function deleteCard(event) {
  const index = event.target.getAttribute("data-index");
  myLibrary.splice(index, 1);
  container.textContent = "";
  display();
}

display();
