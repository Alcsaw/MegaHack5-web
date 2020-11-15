import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Form = styled.form`
  font-family: 'Lato',sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;
`;

export const Label = styled.label`
  text-align: center;
  margin-right: 20px;

  font-family: 'Lato', 'sans-serif';
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Select = styled.select`
  border: none;
  border-bottom: 2px solid var(--modal-black);
  background: var(--white);
  cursor: pointer;
  padding: 15px 15px 10px 15px;

  -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
`;

export const Button = styled.button`
  border: 0;
  background: var(--modal-black);
  color: var(--white);
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 152px;

  padding: 16px 24px;
  font-size: 14px;
  justify-content: center;
`;
