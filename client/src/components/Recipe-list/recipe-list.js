import React, {useEffect, useState} from 'react';
import RecipeItem from '../Recipe-item/recipe-item';
import AddRecipe from '../Add-recipe/add-recipe';
import {getRecipes, deleteRecipe} from '../../services/recipes'
import useStyles from './_recipe-list';

const RecipeList = ({modal, closeModal}) => {
  const classes = useStyles();
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getRecipes()
      .then((recipes) => {
        setRecipeList(recipes)
      })
  }, [recipeList.length]);

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
    <div className={classes.recipeList}>
      {renderRecipes(recipeList)}
      <AddRecipe
        open={modal}
        onModalClose={closeModal}
        onAddRecipe={addRecipe}
      />
    </div>
  )
};

export default RecipeList;