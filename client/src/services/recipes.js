import axios from 'axios';

export default function getRecipes () {
  return axios
    .get('http://localhost:5000/recipes')
    .then((recipes) => recipes.data)
    .catch((err) => alert(err.message));
}

export function postNewRecipe (newRecipe) {
  return axios
    .post('http://localhost:5000/recipes', newRecipe)
    .then((res) => res)
    .catch((err) => alert(err.message));
}