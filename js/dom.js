const itemsContainer = document.getElementById("item_list");

export const EDIT_PREFIX = "edit-button-";
export const REMOVE_PREFIX = "remove-button-";
const nameInput = document.getElementById("name_form");
const descInput = document.getElementById("desc_form");
const speedInput = document.getElementById("speed_form");
const massInput = document.getElementById("mass_form");

const itemTemplate = ({ id, name, desc, speed, mass }) => `
<li id="${id}" class="card list" style="width: 18rem;">
      <img src="https://img.freepik.com/free-vector/set-different-insects_1284-1110.jpg?size=338&ext=jpg" class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title">${name}</h5>
            <p class="card-text">${desc}</p>
            <p class="card-text">Speed: ${speed} meters per second.</p>
            <p class="card-text">Mass: ${mass} grams.</p>
            <button id="${EDIT_PREFIX}${id}" type="button" class="btn btn-primary button">Edit</button>
            <button id="${REMOVE_PREFIX}${id}" type="button" class="btn btn-danger button">Remove</button>
         </div>
</li>
`;

export const addItemToPage = ({ _id: id, name, desc, speed, mass }, onEdit, onDelete) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name,desc, speed, mass })
  );

  const editButton = document.getElementById(`${EDIT_PREFIX}${id}`);
  editButton.addEventListener("click", onEdit);
  const deleteButton = document.getElementById(`${REMOVE_PREFIX}${id}`);
  deleteButton.addEventListener("click", onDelete);
};

export const renderItemsList = (items, onEdit, onDelete) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEdit, onDelete);
  }
};

export const getInputValues = () => {
  return {
    name:  nameInput.value,
    desc: descInput.value,
    speed: speedInput.value,
    mass: massInput.value,
  };
};

export const clearInputs = () => {
  nameInput.value = "";
  descInput.value = "";
  speedInput.value = "";
  massInput.value = "";
};
