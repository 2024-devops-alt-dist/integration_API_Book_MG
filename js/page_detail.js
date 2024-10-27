import { fetchApiBookById } from "./api_book.js";

// DOM SELECTOR

const displayBookDetails = () => {
  const h1 = document.getElementById("title-details");
  const synopsis = document.getElementById("synopsis");
  const auteur = document.querySelector(".author");
  const img = document.querySelector(".flex-desktop img");
  console.log(img);

  const date = document.querySelector(".date");
  const paramId = new URLSearchParams(window.location.search).get("id");
  try {
    console.log(paramId);

    fetchApiBookById(paramId).then((data) => {
      const book = data.volumeInfo;
      h1.textContent = book.title;
      date.textContent = book.publishedDate;

      synopsis.textContent = book.description
        ? book.description
        : "Pas de description";

      if (book.imageLinks) {
        img.src =
          book.imageLinks.extraLarge ||
          book.imageLinks.smallThumbnail ||
          book.imageLinks.large ||
          console.log(book);
      } else {
        img.src = "/assets/images/A-tout-jamais.jpg"; // Image par défaut si aucune image n'est disponible
      }
      book.authors.forEach((author) => {
        auteur.textContent = author;
      });
    });
  } catch (error) {
    console.log(error);
  }
};
displayBookDetails();
