async function requestFood(pathName, radioValue, searchInput) {
  if (pathName === '/foods') {
    let ENDPOINT = '';
    switch (radioValue) {
    case 'Ingredient':
      ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`;
      break;
    case 'Name':
      ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
      break;
    case 'First-Letter':
      ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`;
      break;
    default:
      break;
    }
    try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      return data.meals;
    } catch (error) {
      global.alert(`Erro ao realizar a requisição da API: ${error}`);
    }
  }

  if (pathName === '/drinks') {
    let ENDPOINT = '';
    switch (radioValue) {
    case 'Ingredient':
      ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`;
      break;
    case 'Name':
      ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
      break;
    case 'First-Letter':
      ENDPOINT = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`;
      break;
    default:
      break;
    }
    try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      return data.drinks;
    } catch (error) {
      global.alert(`Erro ao realizar a requisição da API: ${error}`);
    }
  }
}

export default requestFood;
