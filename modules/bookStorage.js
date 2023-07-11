import { saveLocalStorage } from './localStorage.js';

export default class BookStorage {
  constructor(booksContainer) {
    this.booksContainer = booksContainer;
    this.library = [];
  }

createBook = (bookData) => {
  const book = document.createElement('div');
  book.innerHTML = `
<p>${bookData.Title}</p>
<p>${bookData.Author}</p>
<button class = "removeButton">Remove</button>
`;
  const removeButton = book.querySelector('.removeButton');
  removeButton.addEventListener('click', (e) => {
    this.removeBook(e, bookData);
  });
  this.booksContainer.appendChild(book);
}

removeBook = (e, bookData) => {
  e.target.parentElement.remove();
  this.library = this.library.filter((bookToFilter) => bookToFilter !== bookData);
  saveLocalStorage(this);
}
}
