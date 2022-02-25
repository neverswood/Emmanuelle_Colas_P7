import App from "./app.js";
import { bindAppliancesDropdownEventListeners } from "./dropdownAplliance.js";
import { bindIngredientsDropdownEventListeners } from "./dropdownIngredient.js";
import { bindUtensilsDropdownEventListeners } from "./dropdownUtensils.js";
import { keyWord } from "./filter.js";
import { displayRecipes } from "./interface.js";

function index() {
  const app = new App();
  displayRecipes(app.filteredRecipes);
  keyWord(app);
  bindAppliancesDropdownEventListeners(app);
  bindIngredientsDropdownEventListeners(app);
  bindUtensilsDropdownEventListeners(app);
}
index();
