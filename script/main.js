const input = document.getElementById("search-input");
const btn = document.getElementById("search-btn");
const containerList = document.getElementById("container-list");
const containerErro = document.getElementById("error");
const mainHtml = document.getElementById("main");
const searchArea = document.getElementById("search-area");
const removeBtn = document.getElementById("remove-btn");
const loadingIcon = document.getElementById("loading");

input.addEventListener('input', () => {
    if (removeBtn.classList.contains("active")) return;
    removeBtn.classList.add("active");
})

btn.addEventListener('click', () => {
    mainHtml.classList.add("active");
    containerList.innerHTML ="";
    containerErro.innerHTML ="";
    let bookName = input.value;
    if (bookName.trim() === "") return erroOnPage("search for a book"), input.value="";
    const bookNameForApi = bookName.replace(/ /g, "%20");
    loadingIcon.classList.add("active");
    search(bookNameForApi);
})

removeBtn.addEventListener('click', () => {
    input.value = "";
    removeBtn.classList.remove("active");
})

async function search(bookNameForApi){
    const url = `https://books.googleapis.com/books/v1/volumes?q=${bookNameForApi}&fields=items/volumeInfo(authors,description,imageLinks,pageCount,publisher,publishedDate,previewLink,title)`;
    try {
        const response = await fetch(url);
        if (response.status != 200) throw "was not possible to search";
        const json = await response.json();
        if (json.items === undefined) throw "there are no books";
        catchBookInfos(json.items); 
    } catch(error) {
        loadingIcon.classList.remove("active");
        erroOnPage(error);
    }
}
    //
    
function catchBookInfos(booksAllInfos){ 
    booksAllInfos.forEach(listOfBookInfo => {
        const book = createBookObject(listOfBookInfo.volumeInfo);
        insertOnPage(book);
        loading();
    })
}

function loading() {
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

function insertOnPage({title, author, publisher, publishedDate, pagesNumber, description, imageLink, previewLink}) {
    const cardBook = document.createElement('li');
    cardBook.classList.add("card")
    cardBook.innerHTML = `
        <img src="${imageLink}" class="card-img-top mt-5 ml-3" onerror="this.src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';" alt="book image">
        <div class="card-body align-self-center">
        <h5 class="card-title">${title}</h5>
        <p class="card-text"><em class="card-text-title">Author:</em> ${author}</p>
        <p class="card-text"><em class="card-text-title">Publisher:</em> ${publisher}</p>
        <p class="card-text"><em class="card-text-title">Published:</em> ${publishedDate}</p>
        <p class="card-text"><em class="card-text-title">Pages:</em> ${pagesNumber}</p>
        <a href="${previewLink}" class="btn">link</a>
        </div>`;       //<p>${description}</p>
    containerList.appendChild(cardBook);
}

//

function erroOnPage(erroMessage) {
    const erroText = document.createElement('p');
    erroText.innerHTML = erroMessage;
    containerErro.appendChild(erroText);
}