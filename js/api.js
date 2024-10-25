const mainContainer = document.getElementById('main-container')
const containerBook = document.getElementById('container-book')
const detailsBook = document.getElementById('details-book')
const detailsBookContent = document.getElementById('details-book-content')
const div = document.getElementById('div')
const imgContainer = document.getElementById('icon-image-content')
mainContainer.appendChild(containerBook)

const getBooksByCategory = async (query) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${query}&maxResults=5`);
        const data = await response.json();
        const books = data.items.map(book => {
            return book.volumeInfo;
        });
        return books;
    } catch (error) {
        console.log(error.message);
    }
};

(async () => {
    const books = await getBooksByCategory('thriller');
    console.log(books);
    for (let book of books) {
        let sourceImg = ''
        const img = document.createElement('img')
        const titleInfo = book.title;
        const authorsArray = book.authors
        const publishedDate = book.publishedDate
        const description = book.description
        if(book.imageLinks) {
            sourceImg = book.imageLinks?.smallThumbnail
            img.src = sourceImg
            img.classList.add('img-couv')
        }
        //Rajouter le link vers les infos du livre en question qui englobe l'img de couv
        containerBook.prepend(img)
        containerBook.prepend(detailsBook)
        
        const title = document.createElement('h3'); 
        title.textContent = titleInfo;
        detailsBook.prepend(title); 
        detailsBook.appendChild(imgContainer)
        
        const author = document.createElement('p')
        author.classList.add('auteur')
        for (let element of authorsArray) {
         author.textContent = "par " + element 
        }
        div.appendChild(author)

        const date = document.createElement('p')
        date.classList.add('date')
        date.textContent = publishedDate
        div.appendChild(date)
        // div.appendChild(date)
        
        const synopsis = document.createElement('p') 
        synopsis.textContent = description;
        synopsis.classList.add('synopsis')
        detailsBookContent.prepend(synopsis)
        detailsBookContent.prepend(div)
        div.prepend(detailsBook)
      
}})();


// async function getBookByTitle(query) {
//     try{
//         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`)
//         const data = await response.json()
//         console.log(data.items)
//     } catch (error) {
//         console.log(error.message)
//     }
// }