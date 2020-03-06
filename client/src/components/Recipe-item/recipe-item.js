import React, {useEffect, useState} from 'react';
import {Container, Divider} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DialogModal from '../Dialog-Modal/dialog-modal';
import Date from '../Date/date';
import EditRecipe from '../Edit-recipe/edit-recipe';

const RecipeItem = ({ recipe, onRemoveRecipe, onUpdateRecipe, onAddRecipe }) => {
  const {
    title,
    description,
    date
  } = recipe;
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);
  const [updatedRecipe, setUpdatedRecipe] = useState(null);
  console.log('DATE', date);
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
  const renderDescription = description.split('\n').map((item) => {
    return (
      <p>
        {item}
      </p>
    )
  });

  console.log(updatedRecipe);
  return (
    <Container>
      <h1>{title}</h1>
      <Date date={date} />
      <div>{renderDescription}</div>
      <DeleteIcon color="secondary" onClick={() => { handleDialogOpen() }} />
      <EditIcon color="secondary" onClick={() => {
        onEditRecipe(recipe._id)
      }} />
      <EditRecipe open={modal}
        onModalClose={closeModal}
        currentRecipe={recipe}
        onUpdateRecipe={onUpdateRecipe}

      />
      <DialogModal
        onCloseDialogWithStatus={onCloseDialogWithStatus}
        isOpen={isDialogOpen}
        message={`Are you sure you to want delete recipe ${title}?`}
      />
      <Divider />
    </Container>
  )
};

export default RecipeItem;
