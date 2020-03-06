import React from 'react';
import PropTypes from 'prop-types';
import useRecipeForm from '../customHooks';
import {TextField, Container, Button} from '@material-ui/core';
import useStyles from './_recipe-form'

const RecipeForm = ({onModalClose, onAddRecipe}) => {
  const {inputs, handleInputChange, handleSubmit} = useRecipeForm();

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
          <TextField
            name="title"
            required={true}
            placeholder="Recipe title"
            variant="outlined"
            margin="dense"
            value={inputs.title}
            onChange={handleInputChange}
          />
          <TextField
            name="description"
            required={true}
            multiline
            rows="20"
            placeholder="Recipe description"
            variant="outlined"
            margin="dense"
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

RecipeForm.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  onAddRecipe: PropTypes.func.isRequired
};
