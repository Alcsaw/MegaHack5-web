import styled, { css } from 'styled-components';

interface LiProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* width: 100%; */
  padding: 0 8rem;
`;

export const Header = styled.p`
  text-align: center;
  margin-top: 50px;
  font-family: 'Lato', 'sans-serif';
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StylesGrid = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
  width: 100%;
  padding: 2rem;
`;

export const StyleItem = styled.li<LiProps>`
  list-style: none;
  cursor: pointer;
  transition: transform 0.3s;

  ${props => props.selected &&
    css`
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      transform: scale(1.05);
    `
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }


`;

export const StyleCard = styled.img`
  width: 100%;
  max-width: 600px;
`;
