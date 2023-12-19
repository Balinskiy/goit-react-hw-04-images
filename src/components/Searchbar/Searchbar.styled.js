import styled from 'styled-components';

export const Boxheader = styled.header`
  width: 100%;
`;

export const SearchbarContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: bisque;
`;

export const SearchbarButton = styled.button`
  height: 30px;
  margin: 20px 5px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const SearchbarInput = styled.input`
  height: 30px;
`;
