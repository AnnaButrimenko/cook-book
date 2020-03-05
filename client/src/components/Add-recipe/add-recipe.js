import React, { useState } from 'react';
import RecipeForm from '../Recipe-Form/recipe-form';

const AddRecipe = () => {
  const [recipe, isShown] = useState(false);
  const renderRecipeForm = () => {
    isShown(true)
  }

  return (
    <>
      <button onClick={renderRecipeForm}>Add recipe</button>
      { recipe ? <RecipeForm /> : null }
    </>
  )
};

export default AddRecipe;
