export const getLocalStorage = (booksStorage) => {
  if (localStorage.getItem('bookStorage')) {
    booksStorage.library = JSON.parse(localStorage.getItem('bookStorage'));
    for (let i = 0; booksStorage.library.length > i; i += 1) {
      booksStorage.createBook(booksStorage.library[i]);
    }
  }
};

export const saveLocalStorage = (booksStorage) => {
  localStorage.setItem('bookStorage', JSON.stringify(booksStorage.library));
};
