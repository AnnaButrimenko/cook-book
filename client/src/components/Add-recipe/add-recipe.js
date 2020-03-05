import React, { useState, useEffect } from 'react';
import RecipeForm from '../Recipe-Form/recipe-form';
import {Paper, Modal, Backdrop} from '@material-ui/core'
import useStyles from './_add-recipe';

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
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Paper className={classes.paper}className={classes.paper}>
        <RecipeForm/>
      </Paper>
    </Modal>
  )
};

export default AddRecipe;
