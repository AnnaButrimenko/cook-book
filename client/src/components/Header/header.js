import React from 'react';
import {Container, AppBar} from '@material-ui/core';
import useStyles from './_header';
import AddRecipeBtn from '../Add-recipe-btn/add-recipe-btn';

const Header = ({ setModal }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" top="0" color="primary" elevation={0}>
      <Container maxWidth="xl" className={classes.wrapper}>
        <div>
          <h1>
          Cook Book
          </h1>
        </div>
        <AddRecipeBtn
          handleClick={() => {
            setModal(true)
          }}
        />
      </Container>
    </AppBar>
  )
};

export default Header;
