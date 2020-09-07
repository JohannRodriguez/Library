let myLibrary = JSON.parse(localStorage.getItem("library")) || [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  localStorage.setItem("library", JSON.stringify(myLibrary));
  alert("Book was succesfully added")
}

// Add new book with user inputs
let addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readCheckBox = document.getElementById("read");

  if(readCheckBox.checked) {
    var read = true;
  } else {
    var read = false;
  }

  if (title == "" || author == "" || pages == "") {
    return alert("All fields must be filled")
  };

  addBookToLibrary(title, author, pages, read);
});

// Button to hide and show the new book form
let showForm = document.getElementById("new-book-form");

showForm.addEventListener("click", function() {
  let bookForm = document.getElementById("book-form");
  if (bookForm.style.display == "none") {
    bookForm.style.display = "block";
  } else {
    bookForm.style.display = "none";
  };
});