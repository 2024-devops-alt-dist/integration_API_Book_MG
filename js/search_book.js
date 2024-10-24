import { debounce } from "./utils.js";
const API_KEY = "AIzaSyBSWT1H8T-MrWjcBlsI2mSg0oPqr2lxjAA";

// DOM SELECTOR
const containerSugest = document.getElementById("container-sugest");
const input = document.getElementById("title-book");
const formFilter = document.getElementById("form-filter");

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
    console.log(books);
    return resp.items.map((books) => books.volumeInfo);
  } else {
    return [];
  }
};

const getTitleBook = async (e) => {
  e.preventDefault();
  const querry = input.value.trim();
  const books = await getBooksApi(querry);
  console.log(books);

  console.log(input.value);
};
const debouncer = debounce(getTitleBook);
input.addEventListener("input", debouncer);
