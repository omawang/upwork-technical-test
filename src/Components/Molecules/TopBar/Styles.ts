import { makeStyles, Theme } from '@material-ui/core';

export const TopBarStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    width: 'calc(100% - 24px)',
    height: '64px',
    background: '#000',
    zIndex: 200
  },
  input: {
    background: '#fff',
    borderRadius: '6px',
    fontSize: '16px',
    padding: '8px',
    width: '265px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
