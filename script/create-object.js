import { loadingIcon, containerList } from "./components-page.js";
import { insertOnPage } from "./insert-page.js";

export function catchBookInfos(booksAllInfos){ 
    booksAllInfos.forEach(listOfBookInfo => {
        const book = createBookObject(listOfBookInfo.volumeInfo);
        insertOnPage(book);
        loaded();
    })
}

function loaded() {
    loadingIcon.classList.remove("active");
    containerList.classList.add("loaded");
}

function createBookObject(bookInfo) {
    const bookObject = {
        title: bookInfo.title,
        author: bookInfo.authors && bookInfo.authors.length > 1 ? bookInfo.authors.join(" , ") : bookInfo.authors,
        publisher: bookInfo.publisher,
        publishedDate: bookInfo.publishedDate,
        pagesNumber: bookInfo.pageCount,
        description: bookInfo.description,
        imageLink: bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : " ",
        previewLink: bookInfo.previewLink,
    }
    for (let value in bookObject) {
        if (bookObject[value] === undefined) bookObject[value] = " ";
    }
    return bookObject;
}

//