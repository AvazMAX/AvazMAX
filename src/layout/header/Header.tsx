import React, { useState } from 'react';
import { styled } from '@mui/material';
import { SearchIcon } from '../../assets/icons';
import { Input } from '../../components/UI/Input/Input';
import { CustomIconButton } from '../../components/UI/Button/IconButton';

export const Header = () => {
  const [value, setValue] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <h1>Header</h1>
      <form onSubmit={searchHandler}>
        <Input type="text" value={value} onChange={changeHandler} />
        <CustomIconButton type="submit">
          <SearchIcon />
        </CustomIconButton>
      </form>
    </div>
  );
};
