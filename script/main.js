import { input, loadingIcon, containerError, containerList } from "./components-page.js";
import { closeRemoveBtn } from "./remove-btn.js";
import { errorOnPage } from "./insert-page.js";
import { search } from "./request-api.js";

const btn = document.getElementById("search-btn");
const mainHtml = document.getElementById("main");

input.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        e.preventDefault,
        btn.click();
    }
})

btn.addEventListener('click', () => {
    animateMain();
    clearPage();    
    let bookName = input.value;
    if (bookName.trim() === "") {
        return errorOnPage("search for a book"), 
        input.value="", 
        input.focus(),
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
    containerError.innerHTML ="";
    containerError.style.display = "none";
}

function animateMain() {
    mainHtml.classList.add("active");
}

function loadingOn() {
    loadingIcon.classList.add("active");
}