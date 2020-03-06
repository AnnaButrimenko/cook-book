import React, {useState} from 'react';
import {Container, Divider} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DialogModal from '../Dialog-Modal/dialog-modal';
import Date from '../Date/date';
import EditRecipe from '../Edit-recipe/edit-recipe';

const RecipeItem = ({ recipe, recipeList, onRemoveRecipe }) => {
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
  const renderDescription = description.split('\n').map((item) => {
    return (
      <p>
        {item}
      </p>
    )
  });

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
      />
      <DialogModal onCloseDialogWithStatus={onCloseDialogWithStatus} isOpen={isDialogOpen} />
      <Divider />
    </Container>
  )
};

export default RecipeItem;
