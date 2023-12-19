import React, { useState } from 'react';
import {
  Boxheader,
  SearchbarButton,
  SearchbarContainer,
  SearchbarInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onHandleChange = evt => {
    setSearch(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();
    onSubmit(search);
  };

  return (
    <Boxheader>
      <SearchbarContainer onSubmit={onHandleSubmit}>
        <SearchbarButton type="submit">
          <span>Search</span>
        </SearchbarButton>

        <SearchbarInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleChange}
        />
      </SearchbarContainer>
    </Boxheader>
  );
};

export default Searchbar;
