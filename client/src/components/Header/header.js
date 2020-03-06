import React, {useState} from 'react';
import {Container, AppBar, Toolbar} from '@material-ui/core';
import useStyles from './_header';
import AddRecipeBtn from '../Add-recipe-btn/add-recipe-btn';
import AddRecipe from '../Add-recipe/add-recipe';

const Header = ({setModal}) => {
  const classes = useStyles();
  // const [modal, setModal] = useState(false);
  //
  // const closeModal = () => {
  //   setModal(false)
  // };
  return (
    <AppBar position="sticky" top="0" color="primary" elevation={0}>
      <Container maxWidth="xl" className={classes.wrapper}>
      <div className={classes.logo}>
        <h1>
          Cook Book
        </h1>
      </div>
        {/*<AddRecipe*/}
        {/*  open={modal}*/}
        {/*  onModalClose={closeModal}*/}
        {/*/>*/}
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
