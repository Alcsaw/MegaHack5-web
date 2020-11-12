import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);



  return (
    <>
      <Header />

    </>
  );
};

export default Dashboard;
