import { makeStyles, Theme } from '@material-ui/core';

export const NewsCardStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  header: {
    padding: '16px',
  },
  img: {
    width: '100%',
    height: '190px',
    objectFit: 'cover',
  },
}));
