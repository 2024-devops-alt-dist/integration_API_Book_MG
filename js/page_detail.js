import { fetchApiBookById } from "./api_book.js";

// DOM SELECTOR
const imgCouv = document.querySelector('.img-couv')
const imgCouvMobile = document.querySelector('.img-mobile-psy')
const h1 = document.getElementById("title-details");
const author = document.querySelector(".author")
const publishedDate = document.querySelector('.date')
const synopsis = document.querySelector('.synopsis')

const displayBookDetails = () => {
  const paramId = new URLSearchParams(window.location.search).get("id");
  try {
    console.log(paramId);

    fetchApiBookById(paramId).then((data) => {
      const book = data.volumeInfo;
      console.log(book)
      if(book.imageLinks){
        imgCouv.src = book.imageLinks.large
        imgCouvMobile.src = book.imageLinks.large
      }
      h1.textContent = book.title;
      for (let element of book.authors) {
       author.textContent = "par " + element
      }
      publishedDate.textContent = book.publishedDate
      synopsis.textContent = book.description
    });
  } catch (error) {
    console.log(error);
  }
};
displayBookDetails();
