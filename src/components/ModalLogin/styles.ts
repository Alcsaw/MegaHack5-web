import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  max-height: 540px;
  font-family: 'Lato',sans-serif;

  button {
    margin-top: 48px;
  }

`;

export const Button = styled.button`
  border: 0;
  background: var(--modal-black);
  color: var(--white);
  text-transform: uppercase;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: 16px 24px;
  font-size: 14px;
  justify-content: center;
`;

export const Header = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  background: var(--modal-black);
  color: var(--white);
  padding: 20px 35px;
  position: relative;
  letter-spacing: 2.2px;
`;

export const InputContainer = styled.div`
  border: none;
  border-bottom: 2px solid var(--modal-black);
  margin: 25px auto 0 auto;
  width: 100%;

  display: flex;
  align-items:center;
  justify-content: space-between

  svg {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  border: none;
  padding: 15px 15px 10px 15px;
  width: 100%;
  margin-left: 10px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--modal-gray);
  padding: 25px 40px;
  margin: 48px 0 0 0;
`;
