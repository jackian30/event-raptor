function expandSearch() {
  var searchField = document.getElementById('search-field');
  var searchButton = document.getElementById('search-button');

  if (searchField.classList.contains('open')) {
    searchField.classList.remove('open');
    searchButton.innerText = 'Search';
  } else {
    searchField.classList.add('open');
    searchField.focus();
    searchButton.innerText = 'Close';
  }
}
