import { debounce } from "./utils.js";
import { fetchApiBookByTitle } from "./api_book.js";

// DOM SELECTOR
const input = document.getElementById("title-book");
const containerSugest = document.getElementById("container-sugest");

const searchCache = {};

const getBooksApi = async (querry) => {
  const resp = await fetchApiBookByTitle(querry, searchCache);
  if (resp && resp.items) {
    return resp.items.map((books) => books);
  } else {
    return [];
  }
};

const getTitleBook = async (e) => {
  e.preventDefault();
  const querry = input.value.trim();
  const books = await getBooksApi(querry);
  console.log(books);
  containerSugest.innerHTML = "";
  books.forEach((book) => {
    createBook(book.volumeInfo, book.id);
  });
  console.log(input.value);
};

const createBook = (book, idBook) => {
  const card = document.createElement("div");
  card.className = "item";
  const h4 = document.createElement("h4");
  h4.textContent = book.title;
  card.appendChild(h4);
  const a = document.createElement("a");
  a.href = `/pages/psy.html?id=${idBook}`;
  const img = document.createElement("img");
  img.src = book.imageLinks.smallThumbnail;
  img.alt = book.title;
  a.appendChild(img);
  card.appendChild(a);
  book.authors.forEach((author) => {
    const p = document.createElement("p");
    p.textContent = author;
    card.appendChild(p);
  });
  containerSugest.appendChild(card);
};

const debouncer = debounce(getTitleBook);
input.addEventListener("input", debouncer);
