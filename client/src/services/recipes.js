import axios from 'axios';

export function getRecipes () {
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

export function deleteRecipe (id) {
  return axios
    .delete(`http://localhost:5000/recipes/${id}`)
    .then((res) => res)
    .catch((err) => alert(err.message));
}

export function editRecipe (id, updateRecipe) {
  return axios
    .patch(`http://localhost:5000/recipes/${id}`, updateRecipe)
    .then((res) => res)
    .catch((err) => alert(err.message));
}