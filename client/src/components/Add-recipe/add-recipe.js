import React, { useState, useEffect } from 'react';
import RecipeForm from '../Recipe-Form/recipe-form';
import {Paper, Modal, Backdrop} from '@material-ui/core'
import useStyles from './_add-recipe';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ModalWindow from '../Modal-window/modal-window';


const AddRecipe = ({ open, onModalClose }) => {
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
        <div className={classes.header}>
          ADDED TO CART:
          <IconButton onClick={onModalClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <RecipeForm/>
    </ModalWindow>
  )
};

export default AddRecipe;
