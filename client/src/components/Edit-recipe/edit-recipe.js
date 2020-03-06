import React, {useState} from 'react';
import {editRecipe} from '../../services/recipes';
import {Container, Button} from '@material-ui/core';
import ModalWindow from '../Modal-window/modal-window';

const EditRecipe = ({currentRecipe, open, onModalClose, onUpdateRecipe }) => {
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
  const renderEditRecipeForm = (
    <form
      onSubmit={() => {
        handleSubmit();
        onModalClose()
      }

      }
    >
      <Container>
        <div >
          <input
            name="title"
            placeholder="Recipe title"
            value={recipe.title}
            onChange={handleInputChange}
          />
          <textarea
            rows="10"
            name="description"
            placeholder="Recipe description"
            value={recipe.description}
            onChange={handleInputChange}
          />
          <Button
            value="Edit"
            type="Submit"
            disableUnderline
            color="primary"
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
    >
      {renderEditRecipeForm}
    </ModalWindow>
  )
};

export default EditRecipe