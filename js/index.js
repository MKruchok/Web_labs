import {EDIT_PREFIX, renderItemsList} from "./dom.js"
import {getInsects, updateInsect} from "./api.js";
import { postInsect } from "./api.js";
import {clearInputs, getInputValues} from "./dom.js";

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("search_form_clean");
const searchInput = document.getElementById("search_form");
const sortCheckbox = document.getElementById("sort_speed");
const countButton = document.getElementById("count_button");
const submitButton = document.getElementById("submit_button");
const allInputs = document.getElementsByClassName("form");


let insects = [];

export const refetchInsects = () => {
    const Insects = getInsects();

    insects = Insects.sort((a, b) =>b.name.localeCompare(a.name));

    renderItemsList(insects, onEdit);
};

const validateInput = () => {
    if (Array.from(allInputs).filter(x => x.value.trim() === "").length !== 0) {
        alert("Not all fields are filled.");
        return false;
    }
}

const onEdit = (event) => {
    if (validateInput() === false){
        return;
    }
    const itemId = event.target.id.replace(EDIT_PREFIX, "");
    updateInsect(itemId, getInputValues());
    clearInputs();
    refetchInsects();
}

searchButton.addEventListener("click", () => {
    const foundInsects = insects.filter(
        (insect) => insect.name.search(searchInput.value) !== -1);

    renderItemsList(foundInsects, onEdit);
});

clearSearchButton.addEventListener("click", () => {
    renderItemsList(insects, onEdit);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function () {
    if (this.checked) {
        const sortedInsects = insects.sort(
            (a, b) => parseFloat(a.speed) - parseFloat(b.speed));

        renderItemsList(sortedInsects, onEdit);
    }
    else {
        refetchInsects();
    }
});

countButton.addEventListener("click", () => {
    let sum = insects.map(o => o.mass).reduce((a, c) => { return a + c });
    document.getElementById("total_weight").innerText = sum;
    console.log(sum);
});

submitButton.addEventListener("click", (event) => {
    if (validateInput() === false){
        return;
    }
    const {name,desc,speed,mass} = getInputValues();
    clearInputs();
    postInsect({name,desc,speed,mass});
    refetchInsects();
});

refetchInsects();