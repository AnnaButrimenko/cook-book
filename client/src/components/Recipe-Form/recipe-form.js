import React, {useState} from 'react';
import useRecipeForm from '../CustomHooks';
import {TextField, Container, Input, Button} from '@material-ui/core';
import useStyles from './_recipe-form'
import {postNewRecipe} from '../../services/recipes';


const RecipeForm = ({onModalClose, onAddRecipe}) => {
  const {inputs, handleInputChange, handleSubmit} = useRecipeForm();
  const [recipe, setRecipe] = useState({});
  // const [inputs, setInputs] = useState({});
  // const handleSubmit = async (event) => {
  //   if (event) {
  //     event.preventDefault();
  //   }
  //     const newRecipe = inputs;
  //     console.log('inputs', inputs);
  //     setRecipe(newRecipe)
  //     await postNewRecipe(newRecipe)
  //   console.log('from submit', newRecipe);
  // };
  // const handleInputChange = (event) => {
  //   event.persist();
  //   setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  // };
  //
  // console.log('RECIPE', recipe);
  // console.log(onAddRecipe);
  const classes = useStyles();
  return (
    <form
      onSubmit={() => {
        handleSubmit();
        onModalClose()
      }
      }
    >
      <Container>
        <div className={classes.wrapper}>
          <input
            name="title"
            placeholder="Recipe title"
            value={inputs.title}
            onChange={handleInputChange}
          />
          <textarea
            rows="10"
            name="description"
            placeholder="Recipe description"
            value={inputs.description}
            onChange={handleInputChange}
          />
          <Button
            value="Add recipe"
            type="submit"
            disableUnderline
            color="primary"
            onClick={() => { onAddRecipe(inputs) } }
          >Add recipe
          </Button>
        </div>
      </Container>
    </form>
  )
};

export default RecipeForm;
