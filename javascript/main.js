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
addBookBtn.addEventListener('click', (event) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const readCheckBox = document.getElementById('read');
  let read = false;

  if (readCheckBox.checked) {
    read = true;
  }

  if (title === '' || author === '' || pages === '') {
    event.preventDefault();
    const errorMessage = document.getElementById('error');
    errorMessage.style.display = 'block';
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

// Display saved books
const fragment = document.createDocumentFragment();

myLibrary.forEach((book, index) => {
  const bookDiv = document.createElement('div');
  bookDiv.className = 'book';
  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = book.author;
  const bookPages = document.createElement('p');
  bookPages.textContent = `This book has ${book.pages} pages`;
  const bookRead = document.createElement('p');
  const bookReadUpdate = document.createElement('button');
  bookReadUpdate.className = 'update-read-status button';
  bookReadUpdate.setAttribute('data-index', index);
  if (book.read === true) {
    bookRead.textContent = 'You have already read this book';
    bookReadUpdate.textContent = 'Mark as unread';
  } else {
    bookRead.textContent = "You haven't read this book yet";
    bookReadUpdate.textContent = 'Mark as read';
  }
  const deleteBook = document.createElement('button');
  deleteBook.textContent = 'Remove book';
  deleteBook.className = 'remove-book button';
  deleteBook.setAttribute('data-index', index);

  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookDiv.appendChild(bookRead);
  bookDiv.appendChild(bookReadUpdate);
  bookDiv.appendChild(deleteBook);
  fragment.appendChild(bookDiv);
});

const bookDiv = document.getElementById('my-books');
bookDiv.appendChild(fragment);

// Update read status
const updateBtn = document.querySelectorAll('.update-read-status');

updateBtn.forEach((button) => {
  button.addEventListener('click', () => {
    if (myLibrary[button.dataset.index].read === true) {
      myLibrary[button.dataset.index].read = false;
    } else {
      myLibrary[button.dataset.index].read = true;
    }
    localStorage.setItem('library', JSON.stringify(myLibrary));
    location.reload();
  });
});

// Delete book
const deleteBtn = document.querySelectorAll('.remove-book');

deleteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    myLibrary.splice(button.dataset.index, 1);
    localStorage.setItem('library', JSON.stringify(myLibrary));
    location.reload();
  });
});
