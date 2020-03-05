import React from 'react';
import useRecipeForm from '../CustomHooks';
import {TextField, Container, Button} from '@material-ui/core';
import useStyles from './_recipe-form'

const RecipeForm = () => {
  const {inputs, handleInputChange, handleSubmit} = useRecipeForm();
  const classes = useStyles();
  return (
    <form
      onSubmit={handleSubmit}
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
      <Button>Add recipe</Button>
</div>
      </Container>
    </form>
  )
};

export default RecipeForm;
