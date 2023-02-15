import { containerError, containerList } from "./components-page.js";

export function insertOnPage({title, author, publisher, publishedDate, pagesNumber, imageLink, previewLink}) {
    const cardBook = document.createElement('li');
    cardBook.classList.add("card");
    cardBook.innerHTML = `
        <img src="${imageLink}" class="card-img-top" onerror="this.src='/media/error-image';" alt="book image">
        <div class="card-body align-self-center">
        <h5 class="card-title">${title}</h5>
        <p class="card-text"><em class="card__text__title">Author:</em> ${author}</p>
        <p class="card-text"><em class="card__text__title">Publisher:</em> ${publisher}</p>
        <p class="card-text"><em class="card__text__title">Published:</em> ${publishedDate}</p>
        <p class="card-text"><em class="card__text__title">Pages:</em> ${pagesNumber}</p>
        <a href="${previewLink}" class="btn link">link</a>
        </div>`;
    containerList.appendChild(cardBook);
}

export function errorOnPage(errorMessage) {
    const errorText = document.createElement('p');
    errorText.innerHTML = errorMessage;
    containerError.appendChild(errorText);
}
