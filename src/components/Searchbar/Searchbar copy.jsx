import React, { Component } from 'react';
import {
  Boxheader,
  SearchbarButton,
  SearchbarContainer,
  SearchbarInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  onHandleChange = evt => {
    this.setState({ search: evt.target.value });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <Boxheader>
        <SearchbarContainer onSubmit={this.onHandleSubmit}>
          <SearchbarButton type="submit">
            <span>Search</span>
          </SearchbarButton>

          <SearchbarInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
          />
        </SearchbarContainer>
      </Boxheader>
    );
  }
}

export default Searchbar;
