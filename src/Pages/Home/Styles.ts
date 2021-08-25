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
  },
  leftContent: {
    margin: '8px',
    width: 'calc(75% - 16px)',
    minHeight: '300px',
    height: '100%',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  rightContent: {
    margin: '8px',
    width: 'calc(25% - 16px)',
  },
  mapWrapper: {
    position: 'fixed',
    top: 105,
  },
}));
