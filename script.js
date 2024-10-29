const myLibrary = [];

function toTitleCase(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function CreateBook(title, author, pages, status) {
  this.title = toTitleCase(title);
  this.author = toTitleCase(author);
  this.pages = pages;
  this.status = toTitleCase(status);
}

CreateBook.prototype.changeStatus = function () {
  this.status = this.status === "Read" ? "Not Read" : "Read";
  const cardGrid = document.querySelector(".card-grid");
  cardGrid.textContent = "";
  displayBooks();
};

function displayBooks() {
  const cardGrid = document.querySelector(".card-grid");
  cardGrid.textContent = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.className = "card-content";
    card.setAttribute("data-book-name", book.title);

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    const authorSpan = document.createElement("span");
    authorSpan.textContent = "by ";
    author.appendChild(authorSpan);
    author.appendChild(document.createTextNode(book.author));

    const pages = document.createElement("p");
    const pagesSpan = document.createElement("span");
    pagesSpan.textContent = "Pages: ";
    pages.appendChild(pagesSpan);
    pages.appendChild(document.createTextNode(book.pages));

    const status = document.createElement("p");
    const statusSpan = document.createElement("span");
    statusSpan.textContent = "Status: ";
    status.appendChild(statusSpan);
    status.appendChild(document.createTextNode(book.status));

    const div = document.createElement("div");
    div.className = "card-btn";

    const changeStatusButton = document.createElement("button");
    const changeStatusButtonSpan = document.createElement("span");
    changeStatusButtonSpan.textContent = "Change status";
    changeStatusButton.appendChild(changeStatusButtonSpan);
    changeStatusButton.addEventListener("click", () => book.changeStatus());

    const deleteButton = document.createElement("button");
    const deleteButtonSpan = document.createElement("span");
    deleteButtonSpan.textContent = "Delete";
    deleteButton.appendChild(deleteButtonSpan);
    deleteButton.addEventListener("click", () =>
      removeBookFromLibrary(book.title)
    );

    div.append(changeStatusButton, deleteButton);

    card.append(title, author, pages, status, div);

    cardGrid.appendChild(card);
    console.log(card.getAttribute("data-book-name"));
  });
}

function removeBookFromLibrary(bookTitle) {
  const bookIndex = myLibrary.findIndex((book) => book.title === bookTitle);
  const cardGrid = document.querySelector(".card-grid");
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
  }
  console.log(bookIndex);
  cardGrid.textContent = "";
  displayBooks();
}

function openModal() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

function closeModal() {
  const dialog = document.querySelector("dialog");
  const form = document.querySelector("form");
  form.reset();  
  dialog.close();
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;

  const newBook = new CreateBook(title, author, pages, status);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks();
}

const form = document.querySelector("form");

document.querySelector("#add-book").addEventListener("click", () => {
  openModal();
});
document.querySelector("#cancel-btn").addEventListener("click", ()=> {
  closeModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  closeModal();
  form.reset();
});
displayBooks();
