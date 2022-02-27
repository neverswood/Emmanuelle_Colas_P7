import App from "./app.js";
import { displayCloseDropdown } from "./dropdown.js";
import { bindAppliancesDropdownEventListeners } from "./dropdownAplliance.js";
import { bindIngredientsDropdownEventListeners } from "./dropdownIngredient.js";
import { bindUtensilsDropdownEventListeners } from "./dropdownUtensils.js";
import { keyWord } from "./filter.js";
import { displayRecipes } from "./interface.js";

function index() {
  const app = new App();
  window.addEventListener("click", (e) => {
    if (!e.target.matches("#dropdown-appliances *")) {
      // closeDropdownAppliance();
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
  keyWord(app);
  bindAppliancesDropdownEventListeners(app);
  bindIngredientsDropdownEventListeners(app);
  bindUtensilsDropdownEventListeners(app);
}
index();
