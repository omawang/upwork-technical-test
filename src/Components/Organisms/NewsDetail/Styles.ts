import { makeStyles, Theme } from '@material-ui/core';

export const NewsDetailStyles = makeStyles((theme: Theme) => ({
  root: {},
  toolbar: {
    height: '46px',
    background: '#C4C4C4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navWrapper: {
    display: 'flex',
  },
  body: {
    background: '#323232',
    minHeight: '500px',
    padding: '24px',
  },
  title: {
    color: '#fff',
    fontSize: '32px',
    marginBottom: '32px',
  },
  inner: {
    margin: '0px auto 0px auto',
    width: '570px',
  },
  img: {
    width: '100%',
    height: '336px',
    marginBottom: '16px',
  },
  description: {
    padding: '16px',
    color: '#fff',
    fontSize: '14px',
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '32px auto',
  },
  btn: {
    background: '#505050',
    border: '1px solid #FFFFFF',
    borderRadius: '4px',
    textTransform: 'none',
    color: '#fff',
  },
}));
