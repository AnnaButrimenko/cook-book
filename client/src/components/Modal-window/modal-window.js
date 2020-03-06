import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Paper, Backdrop } from '@material-ui/core';
import useStyles from './_modal-window';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function ModalWindow ({ open, onModalClose, children }) {
  const classes = useStyles();

  const handleClose = () => {
    onModalClose();
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          <Paper className={classes.paper}>
            <div className={classes.header}>
              <IconButton
              // color={theme.palette.primary.contrastText}
                onClick={onModalClose}>
                <CloseIcon />
              </IconButton>
            </div>
            {children}
          </Paper>
        </>
      </Modal>
    </>
  );
}

ModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.symbol]),
};

ModalWindow.defaultProps = {
  children: {},
};