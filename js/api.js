import { getBooksByCategory } from "./api_book.js";

const displayBookksByCategory = async () => {
  try {
    const books = await getBooksByCategory("thriller");
    if (!books || books.length === 0) {
      console.error("Aucun livre à afficher.");
      return;
    }
    console.log(books);

    const h3 = document.querySelector(".details-book div h3");
    const authorP = document.querySelector(".auteur");
    const synopsisP = document.querySelector(".synopsis");
    const datePublished = document.querySelector(".date");
    const a = document.querySelector(".content-list-detail a");
    const img = document.querySelector(".content-list-detail a .img-couv");

    for (let book of books) {
      const bookInfo = book.volumeInfo;
      console.log(bookInfo);

      h3.textContent = bookInfo.title;
      console.log(book.id);
      a.src = `/pages/psy.html?id=${book.id}`;
      synopsisP.textContent = bookInfo.description;
      datePublished.textContent = bookInfo.datePublished;
      console.log(book);
      for (const author of bookInfo.authors) {
        console.log(author);
        authorP.textContent = author;
      }

      if (bookInfo.imageLinks && bookInfo.imageLinks.smallThumbnail) {
        img.src = bookInfo.imageLinks.smallThumbnail;
      } else {
        img.src = "";
      }
    }
  } catch (error) {}
};
displayBookksByCategory();
