import { makeStyles, Theme } from '@material-ui/core';

export const GridNewsStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-8px',
  },
  noArticle: {
    margin: '16px 8px',
    fontWeight: 600,
    color: '#fff',
  },
  newsItem: {
    margin: '8px',
    width: 'calc(100% / 3 - 16px)',
    background: '#282828',
  },
}));
