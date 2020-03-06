import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  recipeWrapper: {
    paddingBottom: theme.spacing(4),
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 70
  },
  description: {
    fontSize: '1rem',

  }
});

export default useStyles;