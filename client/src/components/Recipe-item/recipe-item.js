import React, {useState} from 'react';
import {Container, Divider} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DialogModal from '../Dialog-Modal/dialog-modal';
import Date from '../Date/date';
import EditRecipe from '../Edit-recipe/edit-recipe';
import useStyles from './_recipe-item';

const RecipeItem = ({ recipe, onRemoveRecipe, onUpdateRecipe }) => {
  const classes = useStyles();
  const {
    title,
    description,
    date
  } = recipe;
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);

  const onEditRecipe = (id) => {
    setModal(true);
    setEditRecipe(id)
  };

  const closeModal = () => {
    setModal(false)
  };

  const handleDialogOpen = () => {
    setDialogOpen(true)
  };

  const onCloseDialogWithStatus = (status) => {
    if (status) {
      onRemoveRecipe(recipe._id)
    }
    setDialogOpen(false)
  };

  const renderDescription = description.split('\n').map((item, index) => {
    return (
      <p
        key={item + index}
        className={classes.description}>
        {item}
      </p>
    )
  });

  const renderActions = () => {
    return (
      <div className={classes.iconWrapper}>
        <DeleteIcon color="primary" onClick={() => { handleDialogOpen() }} />
        <EditIcon color="primary" onClick={() => {
          onEditRecipe(recipe._id)
        }} />
      </div>
    )
  }

  const renderHeader = () => {
    return (
      <div className={classes.headerWrapper}>
        <h1>{title}</h1>
        {renderActions()}
      </div>

    )
  };

  return (
    <div className={classes.recipeWrapper}>
      <Container >
        {renderHeader()}
        <Date date={date} />
        <div>{renderDescription}</div>
        <Divider />
        <EditRecipe open={modal}
          onModalClose={closeModal}
          currentRecipe={recipe}
          onUpdateRecipe={onUpdateRecipe}

        />
        <DialogModal
          onCloseDialogWithStatus={onCloseDialogWithStatus}
          isOpen={isDialogOpen}
          message={`Are you sure you want to delete recipe ${title}?`}
        />
      </Container>
    </div>
  )
};

export default RecipeItem;
