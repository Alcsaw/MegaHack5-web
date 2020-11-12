import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  max-height: 540px;
  font-family: 'Lato',sans-serif;

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    border: 0;
    background: var(--modal-black);
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;

    .text {
      padding: 16px 24px;
      font-size: 14px;
    }
  }
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

export const Input = styled.input`
  margin: 25 auto 0 auto;
`;
