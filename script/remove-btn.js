import { input } from "./components-page.js";
const removeBtn = document.getElementById("remove-btn");

input.addEventListener('input', () => {
    if (removeBtn.classList.contains("active")) return;
    removeBtn.classList.add("active");
})

removeBtn.addEventListener('click', () => {
    input.value = "";
    closeRemoveBtn();
})

export function closeRemoveBtn() {
    removeBtn.classList.remove("active");
}
