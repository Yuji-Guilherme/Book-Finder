import { input, loadingIcon, containerError, containerList } from "./components-page.js";
import { closeRemoveBtn } from "./remove-btn.js";
import { errorOnPage } from "./insert-page.js";
import { search } from "./request-api.js";

const btn = $("#search-btn");
const mainHtml = $("#main");

input.keypress((e) => {
    if(e.key === "Enter") {
        e.preventDefault,
        btn.click();
    }
})

btn.click(() => {
    animateMain();
    clearPage();    
    let bookName = input.val();
    if (bookName.trim() === "") {
        return errorOnPage("search for a book"), 
        input.val(""), 
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
    containerList.html("");
    containerError.html("");
    containerError.hide();
}

function animateMain() {
    mainHtml.addClass("active");
}

function loadingOn() {
    loadingIcon.addClass("active");
}