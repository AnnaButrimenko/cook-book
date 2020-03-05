import React, { useState, useEffect } from 'react';
import RecipeForm from '../Recipe-Form/recipe-form';
import {Paper, Modal} from '@material-ui/core'
import ModalWindow from '../Modal-window/modal-window';

const AddRecipe = ({ open, onModalClose }) => {
  useEffect(() => {
    document.onkeyup = (event) => {
      if (event.key === 'Escape') {
        onModalClose()
      }
    }
  }, [onModalClose]);

  return (
    <Paper>
      <Modal
        open={open}
        onClose={onModalClose}
      >
        <Paper>
          <RecipeForm/>
        </Paper>
      </Modal>
    </Paper>
  )
};

export default AddRecipe;
