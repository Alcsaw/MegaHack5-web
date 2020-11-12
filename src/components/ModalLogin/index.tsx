import React, { useRef, useCallback } from 'react';

import Modal from '../Modal';

import { LoginForm, Header, Input } from './styles';

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

        <Input type="email" placeholder="e-mail ou CPF" />

        <Input type="password" placeholder="senha" />

        <button type="submit">
          <p className="text">ENTRAR</p>
        </button>
      </LoginForm>
    </Modal>
  );
};

export default ModalLogin;
