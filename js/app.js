import { recipes } from "./data/recipes.js";

export default class App {
  constructor() {
    this.filteredRecipes = recipes;
    this.selectedTags = [];
    this.keyword = "";
  }
}
