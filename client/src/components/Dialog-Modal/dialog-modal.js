import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
import useStyles from './_dialog-modal';

const DialogModal = ({ onCloseDialogWithStatus, isOpen, message }) => {
  const classes = useStyles();
  return (
    <Dialog
      className={classes.wrapper}
      open={isOpen}
      keepMounted
      onClose={() => { onCloseDialogWithStatus(false) }}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent
      >
        <DialogContentText id="alert-dialog-slide-description" color="primary">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actionWrapper}>
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

DialogModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onCloseDialogWithStatus: PropTypes.func.isRequired,
};
