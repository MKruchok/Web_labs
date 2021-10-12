const itemsContainer = document.getElementById("item_list");

const itemTemplate = ({ id, name, description, speed, mass }) => `
<li id="${id}" class="card list" style="width: 18rem;">
      <img src="https://img.freepik.com/free-vector/set-different-insects_1284-1110.jpg?size=338&ext=jpg" class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">Speed: ${speed} meters per second.</p>
            <p class="card-text">Mass: ${mass} grams.</p>
         </div>
</li>
`;

export const addItemToPage = ({ id, name, description, speed, mass }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, description, speed, mass })
  );
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};
