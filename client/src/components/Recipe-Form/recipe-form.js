import React from 'react';
import useRecipeForm from '../CustomHooks';

const RecipeForm = () => {
  const {inputs, handleInputChange, handleSubmit} = useRecipeForm();
  return (
    <form
      onSubmit={handleSubmit}
    >
      <input name="title" placeholder="Recipe title" value={inputs.title} onChange={handleInputChange}/>
      <textarea name="description" placeholder="Recipe description" value={inputs.description} onChange={handleInputChange}/>
      <button>Add recipe</button>
    </form>
  )
};

export default RecipeForm;
