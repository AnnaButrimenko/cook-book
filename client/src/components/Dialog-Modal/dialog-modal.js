import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';

const DialogModal = ({ onCloseDialogWithStatus, isOpen, message }) => {
  const classes = null;
  return (
    <Dialog
      open={isOpen}
      keepMounted
      onClose={() => { onCloseDialogWithStatus(false) }}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent >
        <DialogContentText id="alert-dialog-slide-description" color="secondary">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => { onCloseDialogWithStatus(false) }} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" onClick={() => { onCloseDialogWithStatus(true) }} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogModal;