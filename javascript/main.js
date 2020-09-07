const myLibrary = JSON.parse(localStorage.getItem('library')) || [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

// Add new book with user inputs
const addBookBtn = document.getElementById('add-book-btn');
addBookBtn.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readCheckBox = document.getElementById('read');
  let read = false;

  if (readCheckBox.checked) {
    read = true;
  }

  if (title === '' || author === '' || pages === '') {
    return alert('All fields must be filled');
  }

  return addBookToLibrary(title, author, pages, read);
});

// Button to hide and show the new book form
const showForm = document.getElementById('new-book-form');

showForm.addEventListener('click', () => {
  const bookForm = document.getElementById('book-form');
  if (bookForm.style.display === 'none') {
    bookForm.style.display = 'block';
  } else {
    bookForm.style.display = 'none';
  }
});
