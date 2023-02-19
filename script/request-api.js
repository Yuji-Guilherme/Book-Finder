import { loadingIcon } from "./components-page.js";
import { catchBookInfos } from "./create-object.js";
import { errorOnPage } from "./insert-page.js";

export async function search(bookNameForApi){
    const qtyBook = 10;
    const url = `https://books.googleapis.com/books/v1/volumes?q=${bookNameForApi}&maxResults=${qtyBook}&fields=items/volumeInfo(authors,imageLinks,pageCount,publisher,publishedDate,previewLink,title)`;
   try {
       const response = await fetch(url);
       if (response.status != 200) throw "was not possible to search";
       const json = await response.json();
       if (json.items === undefined) throw "there are no books";
       catchBookInfos(json.items); 
   } catch(error) {
       loadingIcon.removeClass("active");
       errorOnPage(error);
   }
}
