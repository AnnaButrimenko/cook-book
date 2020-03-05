import React from 'react';
import useRecipeForm from '../CustomHooks';
import {TextField} from '@material-ui/core';

const RecipeForm = () => {
  const {inputs, handleInputChange, handleSubmit} = useRecipeForm();
  return (
    <form
      onSubmit={handleSubmit}
    >
      <TextField
        name="title"
        placeholder="Recipe title"
        value={inputs.title}
        onChange={handleInputChange}
      />
      <TextField
        rows="10"
        name="description"
        placeholder="Recipe description"
        value={inputs.description}
        onChange={handleInputChange}
        multiline
      />
      <button>Add recipe</button>
    </form>
  )
};

export default RecipeForm;
