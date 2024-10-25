import { getBooksByCategory } from "./api_book.js";

const displayBookksByCategory = async () => {
  try {
    const books = await getBooksByCategory("thriller");
    if (!books || books.length === 0) {
      console.error("Aucun livre à afficher.");
      return;
    }
    console.log(books);

    const mainContainer = document.querySelector(
      ".main-container.list-details"
    );

    for (let book of books) {
      const bookInfo = book.volumeInfo;

      // Création de la card
      const contentListDetail = document.createElement("div");
      contentListDetail.className = "d-flex content-list-detail p-none";

      // Lien
      const aLink = document.createElement("a");
      aLink.href = `/pages/psy.html?id=${book.id}`;

      // Img couv
      const imgCouv = document.createElement("img");
      imgCouv.className = "img-couv";
      imgCouv.src = bookInfo.imageLinks
        ? bookInfo.imageLinks.smallThumbnail
        : "/assets/images/A-tout-jamais.jpg";
      imgCouv.alt = bookInfo.title || "Image non disponible";

      aLink.appendChild(imgCouv);

      // Container des details
      const detailsBook = document.createElement("div");
      detailsBook.className = "details-book";

      const detailInnerDiv = document.createElement("div");

      // Première ligne avec le titre et la note
      const justiBetween = document.createElement("div");
      justiBetween.className = "d-flex justi-between";

      // Title
      const h3Title = document.createElement("h3");
      h3Title.textContent = bookInfo.title || "Titre non disponible";

      // Rating
      const ratingContainer = document.createElement("div");
      ratingContainer.className = "d-flex align-content";

      const rating = document.createElement("p");
      rating.className = "ft-s-cust";
      rating.textContent = bookInfo.averageRating || "N/A";

      // Icon rating
      const starIcon = document.createElement("img");
      starIcon.className = "icon-review";
      starIcon.src = "/assets/icons/utils/icon-stars.svg";
      starIcon.alt = "icon étoile avis client";

      ratingContainer.appendChild(rating);
      ratingContainer.appendChild(starIcon);

      justiBetween.appendChild(h3Title);
      justiBetween.appendChild(ratingContainer);

      // Author
      const authorP = document.createElement("p");
      authorP.className = "auteur";
      authorP.textContent = bookInfo.authors
        ? bookInfo.authors.join(", ")
        : "Auteur inconnu";

      // Date Published
      const datePublished = document.createElement("p");
      datePublished.className = "date";
      datePublished.textContent =
        bookInfo.publishedDate || "Date non disponible";

      // Synopsis
      const synopsisP = document.createElement("p");
      synopsisP.className = "synopsis";
      synopsisP.textContent =
        bookInfo.description || "Pas de description disponible";

      const detailsLinkContainer = document.createElement("p");
      detailsLinkContainer.className = "mt-auto";

      // Lien page details
      const detailsLink = document.createElement("a");
      detailsLink.href = `/pages/psy.html?id=${book.id}`;
      detailsLink.className = "btn-details";
      detailsLink.textContent = "Voir détails >";

      detailsLinkContainer.appendChild(detailsLink);

      // Assemblage
      detailInnerDiv.appendChild(justiBetween);
      detailInnerDiv.appendChild(authorP);
      detailInnerDiv.appendChild(datePublished);
      detailsBook.appendChild(detailInnerDiv);
      detailsBook.appendChild(synopsisP);
      detailsBook.appendChild(detailsLinkContainer);

      contentListDetail.appendChild(aLink);
      contentListDetail.appendChild(detailsBook);

      mainContainer.appendChild(contentListDetail);
    }
  } catch (error) {}
};
displayBookksByCategory();
