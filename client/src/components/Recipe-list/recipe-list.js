import React, {useEffect, useState} from 'react';
import {getRecipes, deleteRecipe} from '../../services/recipes'
import RecipeItem from '../Recipe-item/recipe-item';
import AddRecipe from '../Add-recipe/add-recipe';
import {Container} from '@material-ui/core';

const RecipeList = ({modal, closeModal}) => {
  const [recipeList, setRecipeList] = useState([]);
  const [updatedRecipe, setUpdatedRecipe] = useState(null);

  useEffect(() => {
    getRecipes()
      .then((recipes) => {
        setRecipeList(recipes)
      })
  }, [recipeList.length]);

  console.log(recipeList.length);

  const addRecipe = recipe => {
    setRecipeList([...recipeList, recipe])
  };

  const updateRecipe = (id, updatedRecipe) => {
    setRecipeList(recipeList.map(recipe => (recipe._id === id ? updatedRecipe : recipe)))
  };

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
        recipeList={recipeList}
        onUpdateRecipe={updateRecipe}
      />
    ))
  );
  return (
    <>
      {renderRecipes(recipeList)}
      <AddRecipe
  open={modal}
  onModalClose={closeModal}
        onAddRecipe={addRecipe}
  />
    </>
  )
};

export default RecipeList;