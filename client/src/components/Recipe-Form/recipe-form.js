import React from 'react';
import useRecipeForm from '../CustomHooks';
import {TextField, Container, Input, Button} from '@material-ui/core';
import useStyles from './_recipe-form'


const RecipeForm = ({onModalClose}) => {
  const {inputs, handleInputChange, handleSubmit} = useRecipeForm();
  console.log(inputs);
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
          <Input
            value="Add recipe"
            type="submit"
            disableUnderline
            color="primary"
          />
        </div>
      </Container>
    </form>
  )
};

export default RecipeForm;
