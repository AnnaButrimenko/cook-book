import { useState } from 'react';
import {postNewRecipe} from '../services/recipes';

const useRecipeForm = () => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      console.log(inputs);
      event.preventDefault();
      const newRecipe = inputs;
      postNewRecipe(newRecipe);
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };
  
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useRecipeForm;
