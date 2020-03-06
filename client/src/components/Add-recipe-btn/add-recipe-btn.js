import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

function AddRecipeBtn ({ handleClick }) {
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<AddIcon />}
      onClick={handleClick}
    >
      Add recipe
    </Button>
  )
}

export default AddRecipeBtn;

AddRecipeBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
