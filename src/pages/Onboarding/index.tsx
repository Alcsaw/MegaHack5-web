import React, { useState } from 'react';

import { Container, Header, StylesGrid, StyleItem, StyleCard } from './styles';

import meuEstilo from '../../assets/meu-estilo-legendado.jpg';

import casualImg from '../../assets/styles/card_casual.webp';
import eleganteImg from '../../assets/styles/card_elegante.webp';
import coolImg from '../../assets/styles/card_cool.webp';
import relaxImg from '../../assets/styles/card_relax.webp';
import Banner from '../../components/Banner';
import OnboardingForm from '../../components/OnboardingForm';

const Onboarding: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('');

  function handleSelectItem(style: string) {
    setSelectedStyle(style);
  }

  return (
    <Container>
      <Banner img={meuEstilo} />

      <Header>Qual é o seu estilo?</Header>

      <StylesGrid>
        <StyleItem
          key={"casual"}
          onClick={() => handleSelectItem("casual")}
          selected={selectedStyle === 'casual'}
        >
          <StyleCard src={casualImg} alt="Estilo Casual" />
        </StyleItem>

        <StyleItem
          key={"elegante"}
          onClick={() => handleSelectItem("elegante")}
          selected={selectedStyle === 'elegante'}
        >
          <StyleCard src={eleganteImg} alt="Estilo Elegante" />
        </StyleItem>

        <StyleItem
          key={"cool"}
          onClick={() => handleSelectItem("cool")}
          selected={selectedStyle === 'cool'}
        >
          <StyleCard src={coolImg} alt="Estilo Cool" />
        </StyleItem>

        <StyleItem
          key={"relax"}
          onClick={() => handleSelectItem("relax")}
          selected={selectedStyle === 'relax'}
        >
          <StyleCard src={relaxImg} alt="Estilo Relax" />
        </StyleItem>
      </StylesGrid>

      <OnboardingForm />
    </Container>
  );
}

export default Onboarding;
