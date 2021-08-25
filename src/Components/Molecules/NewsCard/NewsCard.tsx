import React from 'react';
import { Article } from '../../../Types';
import { GridNewsProps } from '../../Organisms';

import { NewsCardStyles } from './Styles';

export type NewsCardProps = {
  index: number;
  article: Article;
  onClick: GridNewsProps['onClick'];
};

export const NewsCard = ({ index, article, onClick }: NewsCardProps) => {
  const classes = NewsCardStyles();

  return (
    <div className={classes.root} onClick={() => onClick(index)}>
      <div className={classes.header}>{article.title}</div>
      <img
        src={article.urlToImage}
        alt={article.title}
        className={classes.img}
      />
    </div>
  );
};
