import React, { FormEvent, useState } from 'react';

import { FiHeart, FiShoppingBag, FiSearch } from 'react-icons/fi';

import TopBanner from '../TopBanner';
import logoImg from '../../assets/logo_red.webp';

import { Container, HeaderContent, ProductsSearch, SearchInput, SearchButton } from './styles';
import api from '../../services/api';

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`/${searchText}`);

    setSearchText('');
  }

  return (
    <Container>
      <TopBanner />

      <HeaderContent>
        <img src={logoImg} alt="Lojas Renner" />

        <ProductsSearch>
          <SearchInput
            type="text"
            placeholder="Buscar produtos"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <SearchButton type="submit">
            <FiSearch size={20} />
          </SearchButton>
        </ProductsSearch>

        <FiHeart size={24} style={{ marginLeft: 25 }} />

        <FiShoppingBag size={24} style={{ marginLeft: 25 }} />
      </HeaderContent>
    </Container>
  );
}

export default Header;