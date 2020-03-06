import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

function AddRecipeBtn ({ handleClick }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    isTablet ? (
      <Button
        size="large"
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        <span>
            Add recipe
        </span>
      </Button>
    )
      : (<AddIcon
        onClick={handleClick}
      />)
  )
}

export default AddRecipeBtn;

AddRecipeBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
