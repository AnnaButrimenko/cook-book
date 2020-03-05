import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

function AddRecipeBtn ({ handleClick }) {
  return (
    <Button
      size="large"
      fullWidth
      variant="contained"
      color="primary"
      disableElevation
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
