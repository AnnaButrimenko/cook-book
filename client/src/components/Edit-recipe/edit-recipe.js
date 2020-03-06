import React, {useState} from 'react';
import {editRecipe} from '../../services/recipes';
import RecipeForm from '../Recipe-Form/recipe-form';
import {Container, Input, Button} from '@material-ui/core';
import ModalWindow from '../Modal-window/modal-window';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const EditRecipe = ({currentRecipe, open, onModalClose }) => {
  const [recipe, setRecipe] = useState(currentRecipe);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const updateRecipe = recipe;
    await editRecipe(currentRecipe._id, updateRecipe);
    console.log('updateRecipe', updateRecipe);
  };
  const handleInputChange = (event) => {
    event.persist();
    setRecipe(recipe => ({...recipe, [event.target.name]: event.target.value}));
  };
  console.log('currentRecipe', currentRecipe);
  console.log(recipe);
  return (
    <ModalWindow
      // aria-labelledby="transition-modal-title"
      // aria-describedby="transition-modal-description"
      // className={classes.modal}
      open={open}
      onModalClose={onModalClose}
      // closeAfterTransition
      // BackdropComponent={Backdrop}
      // BackdropProps={{
      //   timeout: 500,
      // }}
    >

      <form
        onSubmit={() => {
          handleSubmit();
          onModalClose()
        }}
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
            >Save
            </Button>
          </div>
        </Container>
      </form>

    </ModalWindow>
  )
};

export default EditRecipe