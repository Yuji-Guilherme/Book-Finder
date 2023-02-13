const apiKey = "";
const input = document.getElementById("searchArea");
const btn = document.getElementById("searchBtn");
const containerList = document.getElementById("container")
const containerErro = document.getElementById("error")

btn.addEventListener('click', () => {
    containerList.innerHTML ="";
    containerErro.innerHTML ="";
    let bookName = input.value;
    try {
        if (bookName.trim() === "") throw "search for a book";
        const bookNameForApi = bookName.replace(/ /g, "%20");
        Search(bookNameForApi);
    } catch(error) {
        erroOnPage(error);
    }
})

async function Search(bookNameForApi){
    const url = `https://books.googleapis.com/books/v1/volumes?q=${bookNameForApi}&key=${apiKey}&fields=items/volumeInfo(authors,description,imageLinks,pageCount,publisher,publishedDate,previewLink,title)`;
    const response = await fetch(url);
    if (response.status != 200) throw "it was not possible to search";
    const json = await response.json();
    if(json.items === undefined) throw "there are no books";
    catchBookInfos(json.items);
    }
    
    //
    
function catchBookInfos(booksAllInfos){ 
    booksAllInfos.forEach(listOfBookInfo => {
        const book = createBookObject(listOfBookInfo.volumeInfo);
        insertOnPage(book);
    })
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
    const cardBook = document.createElement('div');
    cardBook.innerHTML = `
        <img src="${imageLink}" onerror="this.src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';" alt="book image">
        <h2>${title}</h2>
        <p>${author}</p>
        <p>${publisher}</p>
        <p>${publishedDate}</p>
        <p>${pagesNumber}</p>
        <p>${description}</p>
        <a href="${previewLink}">link</a>`;
    containerList.appendChild(cardBook);
}

//

function erroOnPage(erroMessage) {
    const erroText = document.createElement('p');
    erroText.innerHTML = erroMessage;
    containerErro.appendChild(erroText);
}