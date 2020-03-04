import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogModal from '../Dialog-Modal/dialog-modal';

export default function RecipeItem ({ recipe, onRemoveRecipe }) {
  const {
    title,
    description
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
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <DeleteIcon color="secondary" onClick={() => { handleDialogOpen() }} />
      <DialogModal onCloseDialogWithStatus={onCloseDialogWithStatus} isOpen={isDialogOpen} />
    </>
  )
}
