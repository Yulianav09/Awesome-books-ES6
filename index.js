import * as luxon from 'https://esm.run/luxon'; // eslint-disable-line
import Book from './modules/book.js';
import BookStorage from './modules/bookStorage.js';
import { getLocalStorage, saveLocalStorage } from './modules/localStorage.js';

const booksContainer = document.querySelector('.container');
const booksTitle = document.querySelector('#booksTitle');
const booksAuthors = document.querySelector('#booksAuthors');
const addButton = document.querySelector('.addButton');
const navList = document.querySelector('#navList');
const navAdd = document.querySelector('#navAdd');
const navContact = document.querySelector('#navContact');
const listSection = document.querySelector('#listSection');
const addSection = document.querySelector('#addSection');
const contactSection = document.querySelector('#contactSection');
const datetime = document.getElementById('datetime');

setInterval(() => {
  const now = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL);
  datetime.innerHTML = `${now}`;
}, 1000);

navList.addEventListener('click', () => {
  listSection.classList.remove('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

navAdd.addEventListener('click', () => {
  listSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

navContact.addEventListener('click', () => {
  listSection.classList.add('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
});

const booksStorage = new BookStorage(booksContainer);

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(
    booksTitle.value,
    booksAuthors.value,
  );
  booksStorage.library.push(book);
  booksStorage.createBook(book);
  saveLocalStorage(booksStorage);
});

getLocalStorage(booksStorage);
