import { Book, BookStorage } from "./modules/classes.js";
import { getLocalStorage, saveLocalStorage } from "./modules/localStorage.js";

const booksContainer = document.querySelector (".container")
const booksTitle = document.querySelector("#booksTitle")
const booksAuthors = document.querySelector("#booksAuthors")
const addButton = document.querySelector(".addButton")

let booksStorage = new BookStorage(booksContainer)

addButton.addEventListener("click", (e) => {
  e.preventDefault
  let book = new Book(
    booksTitle.value,
    booksAuthors.value
  )
  booksStorage.library.push(book)
  booksStorage.createBook(book)
  saveLocalStorage(booksStorage)
})

getLocalStorage(booksStorage)
