import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { NewsDetailStyles } from './Styles';
import { Article } from '../../../Types';

export type NewsDetailProps = {
  article: Article;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export const NewsDetail = ({
  article,
  onClose,
  onNext,
  onPrev,
}: NewsDetailProps) => {
  const classes = NewsDetailStyles();

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <div className={classes.navWrapper}>
          <IconButton onClick={onPrev}>
            <BsArrowLeftShort />
          </IconButton>
          <IconButton onClick={onNext}>
            <BsArrowRightShort />
          </IconButton>
        </div>

        <IconButton onClick={onClose}>
          <GrClose />
        </IconButton>
      </div>

      <div className={classes.body}>
        <Typography className={classes.title}>{article.title}</Typography>
        <div className={classes.inner}>
          <img
            src={article.urlToImage}
            alt={article.title}
            className={classes.img}
          />
          <Typography className={classes.description}>
            {article.description}
          </Typography>

          <div className={classes.btnWrapper}>
            <Button className={classes.btn}>Read full article</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
