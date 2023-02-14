import { containerErro, containerList } from "./components-page.js";

export function insertOnPage({title, author, publisher, publishedDate, pagesNumber, description, imageLink, previewLink}) {
    const cardBook = document.createElement('li');
    cardBook.classList.add("card");
    cardBook.innerHTML = `
        <img src="${imageLink}" class="card-img-top mt-5 ml-3" onerror="this.src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';" alt="book image">
        <div class="card-body align-self-center">
        <h5 class="card-title">${title}</h5>
        <p class="card-text"><em class="card-text-title">Author:</em> ${author}</p>
        <p class="card-text"><em class="card-text-title">Publisher:</em> ${publisher}</p>
        <p class="card-text"><em class="card-text-title">Published:</em> ${publishedDate}</p>
        <p class="card-text"><em class="card-text-title">Pages:</em> ${pagesNumber}</p>
        <a href="${previewLink}" class="btn">link</a>
        </div>`;
    containerList.appendChild(cardBook);
}

export function erroOnPage(erroMessage) {
    const erroText = document.createElement('p');
    erroText.innerHTML = erroMessage;
    containerErro.appendChild(erroText);
}
