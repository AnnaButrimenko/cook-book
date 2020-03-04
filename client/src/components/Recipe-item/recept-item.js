import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogModal from '../Dialog-Modal/dialog-modal';
import Date from '../Date/date';

const RecipeItem = ({ recipe, onRemoveRecipe }) => {
  const {
    title,
    description,
    date
  } = recipe;
  const [isDialogOpen, setDialogOpen] = useState(false);
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
      <DialogModal onCloseDialogWithStatus={onCloseDialogWithStatus} isOpen={isDialogOpen} />
    </Container>
  )
};

export default RecipeItem;
