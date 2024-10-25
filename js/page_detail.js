import { fetchApiBookById } from "./api_book.js";

// DOM SELECTOR
const h1 = document.getElementById("title-details");

const displayBookDetails = () => {
  const paramId = new URLSearchParams(window.location.search).get("id");
  try {
    console.log(paramId);

    fetchApiBookById(paramId).then((data) => {
      const book = data.volumeInfo;
      h1.textContent = book.title;
    });
  } catch (error) {
    console.log(error);
  }
};
displayBookDetails();
