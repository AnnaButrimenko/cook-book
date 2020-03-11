import React, {useState} from 'react';
import {editRecipe} from '../../services/recipes';
import {Container, Button, TextField} from '@material-ui/core';
import ModalWindow from '../Modal-window/modal-window';
import useStyles from './_edit-recipe';

const EditRecipe = ({currentRecipe, open, onModalClose, onUpdateRecipe }) => {
  const classes = useStyles();
  const [recipe, setRecipe] = useState(currentRecipe);
  const [updatedRecipe, setUpdatedRecipe] = useState(null);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const updateRecipe = recipe;
    setUpdatedRecipe(updateRecipe);
    await editRecipe(currentRecipe._id, updateRecipe);
  };
  
  const handleInputChange = (event) => {
    event.persist();
    setRecipe(recipe => ({...recipe, [event.target.name]: event.target.value}));
  };
  const validate = () => {
    return !(recipe.title && recipe.description)
  };

  const renderEditRecipeForm = (
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
            required
            placeholder="Recipe title"
            margin="dense"
            variant="outlined"
            value={recipe.title}
            onChange={handleInputChange}
          />
          <TextField
            required
            multiline
            rows="20"
            name="description"
            placeholder="Recipe description"
            margin="dense"
            variant="outlined"
            value={recipe.description}
            onChange={handleInputChange}
          />
          <Button
            value="Add recipe"
            type="submit"
            color="primary"
            disabled={validate()}
            onClick={() => { onUpdateRecipe(recipe._id, recipe) } }
          >Save
          </Button>
        </div>
      </Container>
    </form>
  );

  return (
    <ModalWindow
      open={open}
      onModalClose={onModalClose}
      label="Edit recipe"
    >
      <div>
        {renderEditRecipeForm}
      </div>
    </ModalWindow>
  )
};

export default EditRecipe