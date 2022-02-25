import App from "./app.js";
import { bindAppliancesDropdownEventListeners } from "./dropdownAplliance.js";
import { keyWord } from "./filter.js";
import { displayRecipes } from "./interface.js";

function index() {
  const app = new App();
  displayRecipes(app.filteredRecipes);
  keyWord(app);
  bindAppliancesDropdownEventListeners(app);
}
index();
