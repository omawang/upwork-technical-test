import React from 'react';
import { Typography } from '@material-ui/core';
import { Article } from '../../../Types';
import { NewsCard } from '../../Molecules';

import { GridNewsStyles } from './Styles';

export type GridNewsProps = {
  data: Article[];
  onClick: (val: number) => void;
};
export const GridNews = ({ data = [], onClick }: GridNewsProps) => {
  const classes = GridNewsStyles();

  return (
    <div className={classes.root}>
      {data.length === 0 && (
        <Typography className={classes.noArticle}>No articles found</Typography>
      )}

      {data.map((item, index) => (
        <div key={index} className={classes.newsItem}>
          <NewsCard index={index} article={item} onClick={onClick} />
        </div>
      ))}
    </div>
  );
};
