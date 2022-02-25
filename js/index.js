import App from "./app.js";
import { displayRecipes } from "./interface.js";

function index() {
  const app = new App();
  displayRecipes(app.filteredRecipes);
}
index();
