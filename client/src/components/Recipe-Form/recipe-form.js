import React, {useState} from 'react';
import {postNewRecipe} from '../../services/recipes';
import useRecipeForm from '../CustomHooks';

const RecipeForm = () => {
  // const initialState = {
  //   title: '',
  //   description: ''
  // };
  //   const [title, setTitle] = useState({});
  const callback = () => {
    alert(`Recipe Created!
         Title: ${inputs.title}
         Email: ${inputs.description}`);
  }
  const {inputs, handleInputChange, handleSubmit} = useRecipeForm();
  // const submitNewRecipe = (e) => {
  //   const newRecipe = {
  //     ...initialState,
  //     ...values
  //   };
  //   console.log(e.target[0].value);
  //   console.log(e.target[1].value);
  //   // console.log(newRecipe);
  //   // postNewRecipe(newRecipe)
  // }
  console.log(inputs);
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
