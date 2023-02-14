import { input, loadingIcon, containerErro, containerList } from "./components-page.js";
import { closeRemoveBtn } from "./remove-btn.js";
import { erroOnPage } from "./insert-page.js";
import { search } from "./request-api.js";

const btn = document.getElementById("search-btn");
const mainHtml = document.getElementById("main");

btn.addEventListener('click', () => {
    animateMain();
    clearPage();    
    let bookName = input.value;
    if (bookName.trim() === "") {
        return erroOnPage("search for a book"), 
        input.value="", 
        closeRemoveBtn();
    }
    else {
        const bookNameForApi = replaceSpace(bookName);
        loadingOn();
        search(bookNameForApi);
    }
})

function replaceSpace(name) {
    return name.replace(/ /g, "%20");
}

function clearPage() {
    containerList.innerHTML ="";
    containerErro.innerHTML ="";
}

function animateMain() {
    mainHtml.classList.add("active");
}

function loadingOn() {
    loadingIcon.classList.add("active");
}