import React, {useEffect, useState} from 'react';
import getRecipes from '../../services/recipes'
import RecipeItem from '../Recept-item/recept-item';

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((recipes) => {
        setRecipeList(recipes)
      })
  }, []);
  const renderRecipes = (recipeList) => (
    recipeList.map((recipe) => (
      <RecipeItem recipe={recipe} />
    ))
  )
  console.log(recipeList);
  return (
    <>
      {renderRecipes(recipeList)}
    </>
  )
};

export default RecipeList;