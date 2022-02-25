import App from "./app.js";
import { keyWord } from "./filter.js";
import { displayRecipes } from "./interface.js";

function index() {
  const app = new App();
  displayRecipes(app.filteredRecipes);
  keyWord(app);
}
index();
