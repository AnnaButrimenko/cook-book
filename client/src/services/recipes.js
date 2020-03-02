import axios from 'axios';

export default function getRecipes () {
  return axios
    .get('http://localhost:5000/recipes')
    .then((recipes) => recipes.data)
    .catch((err) => alert(err.message));
}