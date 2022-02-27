export function bindKeyWordEventListeners(app) {
  let inputSearch = document.getElementById("searchbar");
  inputSearch.addEventListener("keyup", () => {
    app.setKeyword(inputSearch.value);
  });
}

export function filterDropdown(type) {
  let inputSearch = document.getElementById(`input-${type}`);
  let listBoxLi = document.getElementsByClassName("listbox");
  inputSearch.addEventListener("keyup", () => {
    for (let index = 0; index < listBoxLi.length; index++) {
      if (inputSearch.value.length < 3) {
        listBoxLi[index].style.display = "list-item";
      } else {
        if (
          !listBoxLi[index].innerHTML.toLowerCase().includes(inputSearch.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }
  });
}
