import React, { ChangeEvent } from 'react';
import { Input } from '@material-ui/core';
import { TopBarStyles } from './Styles';

export type TopBarProps = {
  defaultSearch: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TopBar = ({ defaultSearch, onChange }: TopBarProps) => {
  const classes = TopBarStyles();

  return (
    <div className={classes.root}>
      <Input
        placeholder="Search for ..."
        disableUnderline
        className={classes.input}
        name="search"
        defaultValue={defaultSearch}
        onChange={onChange}
      />
    </div>
  );
};
