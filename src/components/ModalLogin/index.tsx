import React, { useRef, useCallback } from 'react';
import { FiUser, FiKey } from 'react-icons/fi';

import Modal from '../Modal';

import { LoginForm, Button, Header, Input, InputContainer, Footer } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleLogin: () => void;
}

const ModalLogin: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleLogin,
}) => {

  const handleSubmit = useCallback(
    async () => {
      handleLogin();

      setIsOpen();
    },
    [handleLogin, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>IDENTIFICAÇÃO</Header>

      <LoginForm onSubmit={handleSubmit}>

        <InputContainer>
          <FiUser />
          <Input type="email" placeholder="e-mail ou CPF" />
        </InputContainer>

        <InputContainer>
          <FiKey />
          <Input type="password" placeholder="senha" />
        </InputContainer>

        <Button type="submit">ENTRAR</Button>
      </LoginForm>

      <Footer>
        <Button>Quero me cadastrar</Button>
      </Footer>
    </Modal>
  );
};

export default ModalLogin;
