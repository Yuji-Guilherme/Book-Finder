import { input } from "./components-page.js";
const removeBtn = document.getElementById("remove-btn");

input.addEventListener('input', () => {
    if (input.value === "") return closeRemoveBtn();
    else if (removeBtn.classList.contains("active")) return;
    removeBtn.classList.add("active");
})

removeBtn.addEventListener('click', () => {
    input.value = "";
    input.focus();
    closeRemoveBtn();
})

export function closeRemoveBtn() {
    removeBtn.classList.remove("active");
}
