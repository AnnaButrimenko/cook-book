import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.main
  },
  modalContent: {
    padding: theme.spacing(2)
  }
}));

export default useStyles;