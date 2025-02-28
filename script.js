const myLibrary = [];
const cardContainer = document.querySelector(".card-container");
const form = document.querySelector("#book-form");

Book.prototype.changeStatus = function () {
  console.log(this.book.status);
};

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  display();
}

addBookToLibrary("abc", "xyz", 12, "read")

function createDomNodes(book, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-index", index);

  const dataProperties = [
    { label: "Title", value: book.title },
    { label: "Auhtor", value: book.author },
    { label: "Pages", value: book.pages },
  ];

  dataProperties.forEach((prop) => {
    const para = document.createElement("p");
    para.textContent = `${prop.label}: ${prop.value}`;
    card.appendChild(para);
  });

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("status-container");

  const statusText = document.createElement("p");
  statusText.textContent = `Status: ${book.status}`;
  statusText.classList.add("status-text");

  const statusButton = document.createElement("button");
  statusButton.textContent = "change";
  statusButton.classList.add("status-button");
  statusButton.setAttribute("data-index", index);

  statusButton.addEventListener("click", function () {
    const bookIndex = parseInt(this.getAttribute("data-index"));
    const selectedBook = myLibrary[bookIndex];
    selectedBook.status = selectedBook.status === "read" ? "not read" : "read";

    const parentCard = this.closest(".card");
    const statusTextElement = parentCard.querySelector(".status-text");
    statusTextElement.textContent = `Status: ${selectedBook.status}`;
  });

  statusContainer.appendChild(statusText);
  statusContainer.appendChild(statusButton);
  card.appendChild(statusContainer);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("data-index", index);
  deleteButton.addEventListener("click", deleteCard);

  card.appendChild(deleteButton);
  cardContainer.appendChild(card);
}

function display() {
  cardContainer.textContent = "";
  myLibrary.forEach((book, index) => {
    createDomNodes(book, index);
  });
}

function deleteCard(event) {
  const index = event.target.getAttribute("data-index");
  myLibrary.splice(index, 1);
  cardContainer.textContent = "";
  display();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form:", form);
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const status = document.getElementById("status").checked? "read": "not read";

  addBookToLibrary(title, author, pages, status);

  form.reset();
  console.log("reached");
  
});

display();
