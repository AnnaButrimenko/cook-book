import React, {useEffect, useState} from 'react';
import {getRecipes, deleteRecipe} from '../../services/recipes'
import RecipeItem from '../Recipe-item/recipe-item';

const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((recipes) => {
        setRecipeList(recipes => recipes)
      })
  }, []);

  const removeRecipe = async (id) => {
    const idx = recipeList.findIndex((el) => el._id === id);
    const newRecipeList = [...recipeList.slice(0, idx), ...recipeList.slice(idx + 1)];
    setRecipeList(newRecipeList);
    await deleteRecipe(id)
  };

  console.log(recipeList);
  const renderRecipes = (recipeList) => (
    recipeList.map((recipe) => (
      <RecipeItem
        key={recipe._id}
        recipe={recipe}
        onRemoveRecipe={removeRecipe}
      />
    ))
  );
  return (
    <>
      {renderRecipes(recipeList)}
    </>
  )
};

export default RecipeList;