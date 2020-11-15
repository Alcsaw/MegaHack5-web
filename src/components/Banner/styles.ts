import styled from 'styled-components';

export const Container = styled.div`
  max-width: 99.3vw;  /*Why? ... WHY?!?!*/
  overflow: hidden;
  width: 99.3vw;

  position: relative;

  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  background: var(--white);
  color: var(--black);
  min-width: 200px;
  padding: 15px;
  border: none;

  font-family: 'Lato', 'sans-serif';
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;

  position: absolute;
  top: 80%;
  right: 45%;
`;
