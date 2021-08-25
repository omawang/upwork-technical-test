import { makeStyles, Theme } from '@material-ui/core';

export const HomePageStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#000',
  },
  content: {
    height: 'calc(100% - 64px)',
    display: 'flex',
    padding: '16px',
    margin: '-8px',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  leftContent: {
    margin: '8px',
    width: 'calc(75% - 16px)',
    minHeight: '300px',
    height: '100%',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 16px)',
    },
  },
  rightContent: {
    margin: '8px',
    width: 'calc(25% - 16px)',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 16px)',
    },
  },
  mapWrapper: {
    position: 'fixed',
    top: 105,
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      top: 'unset',
    },
  },
}));
