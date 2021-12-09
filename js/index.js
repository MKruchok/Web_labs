import {EDIT_PREFIX, REMOVE_PREFIX, renderItemsList} from "./dom.js"
import {getAllInsects, updateInsect, postInsect, deleteInsect} from "./api.js";
import {clearInputs, getInputValues} from "./dom.js";

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("search_form_clean");
const searchInput = document.getElementById("search_form");
const sortCheckbox = document.getElementById("sort_speed");
const countButton = document.getElementById("count_button");
const submitButton = document.getElementById("submit_button");
const allInputs = document.getElementsByClassName("form");


let insects = [];

export const fetchInsects = async () => {
    const Insects = await getAllInsects();
    insects = Insects.sort((a, b) =>b.name.localeCompare(a.name));
    renderItemsList(insects, onEdit, onDelete);
};

const validateInput = () => {
    if (Array.from(allInputs).filter(x => x.value.trim() === "").length !== 0) {
        alert("Not all fields are filled.");
        return false;
    }
    return true;
}

const onDelete = async (event) => {
    const itemId = event.target.id.replace(REMOVE_PREFIX, "");
    await deleteInsect(itemId);
    fetchInsects();
}

const onEdit = async (event) => {
    if (validateInput() === false){
        return;
    }
    const itemId = event.target.id.replace(EDIT_PREFIX, "");
    await updateInsect(itemId, getInputValues());
    clearInputs();
    fetchInsects();
}

searchButton.addEventListener("click", () => {
    const foundInsects = insects.filter(
        (insect) => insect.name.search(searchInput.value) !== -1);

    renderItemsList(foundInsects, onEdit, onDelete());
});

clearSearchButton.addEventListener("click", () => {
    renderItemsList(insects, onEdit, onDelete());

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function () {
    if (this.checked) {
        const sortedInsects = insects.sort(
            (a, b) => parseFloat(a.speed) - parseFloat(b.speed));

        renderItemsList(sortedInsects, onEdit, onDelete());
    }
    else {
        fetchInsects();
    }
});

countButton.addEventListener("click", () => {
    let sum = insects.map(o => o.mass).reduce((a, c) => { return a + c });
    document.getElementById("total_weight").innerText = sum;
    console.log(sum);
});

submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (validateInput() === false){
        return;
    }
    const {name,desc,speed,mass} = getInputValues();
    clearInputs();
    await postInsect({name, desc, speed, mass});
    fetchInsects();
});

fetchInsects();