import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import RecipeForm from '../Recipe-Form/recipe-form';
import ModalWindow from '../Modal-window/modal-window';
import useStyles from './_add-recipe';

const AddRecipe = ({ open, onModalClose, onAddRecipe }) => {
  const classes = useStyles();

  useEffect(() => {
    document.onkeyup = (event) => {
      if (event.key === 'Escape') {
        onModalClose()
      }
    }
  }, [onModalClose]);

  return (
    <ModalWindow
      open={open}
      onModalClose={onModalClose}
    >
      <>
        <div className={classes.header}>
          <IconButton onClick={onModalClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <RecipeForm onAddRecipe={onAddRecipe} onModalClose={onModalClose}/>
      </>
    </ModalWindow>
  )
};

export default AddRecipe;

AddRecipe.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
