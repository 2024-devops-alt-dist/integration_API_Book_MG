const API_KEY = "AIzaSyBSWT1H8T-MrWjcBlsI2mSg0oPqr2lxjAA";
const URL_API_BOOK = `https://www.googleapis.com/books/v1/volumes`;

/**
 * fetchApiBookById
 * @param {idBook} idBook
 * @returns book || null
 */
export const fetchApiBookById = async (idBook) => {
  try {
    const resq = await fetch(`${URL_API_BOOK}/${idBook}`);
    const data = await resq.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 *
 * @param {string} querry
 * @param {json} searchCache
 * @returns books || null
 */
export const fetchApiBookByTitle = async (querry, searchCache) => {
  if (searchCache[querry]) {
    return searchCache[querry];
  }
  try {
    const resp = await fetch(URL_API_BOOK + `?q=${querry}&key=${API_KEY}`);
    const data = await resp.json();
    searchCache[querry] = data;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
