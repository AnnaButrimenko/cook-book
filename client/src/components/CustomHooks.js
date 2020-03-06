import { useState } from 'react';
import {getRecipes, postNewRecipe} from '../services/recipes';

const useRecipeForm = () => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
      console.log(inputs);
      const newRecipe = inputs;
      await postNewRecipe(newRecipe)
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, date: new Date().toLocaleString(), [event.target.name]: event.target.value}));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useRecipeForm;
