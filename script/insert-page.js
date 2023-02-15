import { containerError, containerList } from "./components-page.js";

export function insertOnPage({title, author, publisher, publishedDate, pagesNumber, imageLink, previewLink}) {
    const cardBook = document.createElement('li');
    cardBook.classList.add("card");
    cardBook.innerHTML = `
        <img src="${imageLink}" class="card-img-top" onerror="this.src='/media/error-image';" alt="book image">
        <div class="card-body align-self-center" tabindex="0">
        <h5 class="card-title" aria-label="book title ${title}">${title}</h5>
        <p class="card-text"><em class="card__text__title">Author:</em> ${author}</p>
        <p class="card-text"><em class="card__text__title">Publisher:</em> ${publisher}</p>
        <p class="card-text"><em class="card__text__title">Published:</em> ${publishedDate}</p>
        <p class="card-text"><em class="card__text__title">Pages:</em> ${pagesNumber}</p>
        <a href="${previewLink}" class="btn link" aria-label="book preview link" tabindex="0">link</a>
        </div>`;
    containerList.appendChild(cardBook);
}

export function errorOnPage(errorMessage) {
    const errorText = document.createElement('p');
    errorText.innerHTML = errorMessage;
    containerError.style.display = "block";
    containerError.appendChild(errorText);
}
