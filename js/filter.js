export function bindKeyWordEventListeners(app) {
  let inputSearch = document.getElementById("searchbar");
  inputSearch.addEventListener("keyup", () => {
    app.setKeyword(inputSearch.value);
  });
}
