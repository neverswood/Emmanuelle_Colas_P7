/* Add events to the keyword */
export function bindKeyWordEventListeners(app) {
  let inputSearch = document.getElementById('searchbar');
  inputSearch.addEventListener('keyup', () => {
    app.setKeyword(inputSearch.value);
  });
}

/* Hide or show dropdown list items */
export function filterDropdown(type) {
  let inputSearch = document.getElementById(`input-${type}`);
  let listBoxLi = document.getElementsByClassName('listbox');
  inputSearch.addEventListener('keyup', () => {
    Array.from(listBoxLi).map((listBoxLi) => {
      if (inputSearch.value.length < 3) {
        listBoxLi.style.display = 'list-item';
      } else {
        if (!listBoxLi.innerHTML.toLowerCase().includes(inputSearch.value)) {
          listBoxLi.style.display = 'none';
        } else {
          listBoxLi.style.display = 'list-item';
        }
      }
    });
  });
}
