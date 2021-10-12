import { renderItemsList } from "./dom.js"
import { getInsects } from "./api.js";

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("search_form_clean");
const searchInput = document.getElementById("search_form");
const sortCheckbox = document.getElementById("sort_speed");
const countButton = document.getElementById("count_button");

let insects = [];

export const refetchInsects = () => {
    const Insects = getInsects();

    insects = Insects.sort((a, b) =>b.name.localeCompare(a.name));

    renderItemsList(insects);
};

searchButton.addEventListener("click", () => {
    const foundInsects = insects.filter(
        (insect) => insect.name.search(searchInput.value) !== -1);

    renderItemsList(foundInsects);
});

clearSearchButton.addEventListener("click", () => {
    renderItemsList(insects);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedInsects = insects.sort(
            (a, b) => parseFloat(a.speed) - parseFloat(b.speed));

        renderItemsList(sortedInsects);
    }
    else {
        refetchInsects();
    }
});

countButton.addEventListener("click", () => {
    let sum = insects.map(o => o.mass).reduce((a, c) => { return a + c });
    document.getElementById("total_weight").innerText = sum;
    console.log(sum);
})

// main code
refetchInsects();