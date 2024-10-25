import { debounce } from "./utils.js";
const API_KEY = "AIzaSyBSWT1H8T-MrWjcBlsI2mSg0oPqr2lxjAA";

// DOM SELECTOR
const input = document.getElementById("title-book");
const formFilter = document.getElementById("form-filter");
const containerSugest = document.getElementById("container-sugest");

const searchCache = {};

const fetchApiBookByTitle = async (querry) => {
  if (searchCache[querry]) {
    return searchCache[querry];
  }
  const URL_API_BOOK = `https://www.googleapis.com/books/v1/volumes?q=${querry}&key=${API_KEY}`;
  try {
    const resp = await fetch(URL_API_BOOK);
    const data = await resp.json();
    searchCache[querry] = data;
    console.log(searchCache);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getBooksApi = async (querry) => {
  const resp = await fetchApiBookByTitle(querry);
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

const createBook = (book, idBookk) => {
  const card = document.createElement("div");
  card.className = "item";
  const h4 = document.createElement("h4");
  h4.textContent = book.title;
  card.appendChild(h4);
  const a = document.createElement("a");
  a.href = "/pages/psy.html";
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
