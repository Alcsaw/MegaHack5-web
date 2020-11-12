import React, { useState } from 'react';

import Header from '../../components/Header';
import ModalLogin from '../../components/ModalLogin';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);


  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  async function handleLogin(): Promise<void> {
    try {
      const response = await api.post('/sessions', {
        email: 'alcsaw',
        password: '123456',
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalLogin
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleLogin={handleLogin}
      />
    </>
  );
};

export default Dashboard;
