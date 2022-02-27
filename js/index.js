import App from "./app.js";
import { displayCloseDropdown } from "./dropdown.js";
import { bindAppliancesDropdownEventListeners } from "./dropdownAplliance.js";
import { bindIngredientsDropdownEventListeners } from "./dropdownIngredient.js";
import { bindUtensilsDropdownEventListeners } from "./dropdownUtensils.js";
import { bindKeyWordEventListeners } from "./filter.js";
import { displayRecipes } from "./interface.js";

function index() {
  const app = new App();
  window.addEventListener("click", (e) => {
    if (!e.target.matches("#dropdown-appliances *")) {
      displayCloseDropdown("appliances");
    }
    if (!e.target.matches("#dropdown-utensils *")) {
      displayCloseDropdown("utensils");
    }
    if (!e.target.matches("#dropdown-ingredients *")) {
      displayCloseDropdown("ingredients");
    }
  });
  displayRecipes(app.filteredRecipes);
  bindKeyWordEventListeners(app);
  bindAppliancesDropdownEventListeners(app);
  bindIngredientsDropdownEventListeners(app);
  bindUtensilsDropdownEventListeners(app);
  bindRemoveTagEventListener(app);
}
index();

function bindRemoveTagEventListener(app) {
  let tag = document.getElementById("tag");
  tag.addEventListener("click", (e) => {
    if (!e.target.matches(".tag *")) {
      return;
    }
    app.toggleTag(e.target.closest(".tag").dataset["tag"]);
  });
}
