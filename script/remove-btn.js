import { input } from "./components-page.js";

const removeBtn = $("#remove-btn");

input.on('input', () => {
    if (input.val() === "") return closeRemoveBtn();
    else if (removeBtn.hasClass("active")) return;
    removeBtn.addClass("active");
})

removeBtn.click (() => {
    input.val("");
    input.focus();
    closeRemoveBtn();
})

export function closeRemoveBtn() {
    removeBtn.removeClass("active");
}
