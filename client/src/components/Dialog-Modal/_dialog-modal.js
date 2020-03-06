import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(2)
  },
  actionWrapper: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default useStyles;