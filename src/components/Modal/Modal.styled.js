import styled from 'styled-components';

export const Modaldiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  div {
    position: relative;
    max-width: 80%;
    max-height: 80%;
    overflow: hidden;
    z-index: 3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
