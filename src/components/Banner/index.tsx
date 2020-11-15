import React from 'react';

import { Button, Container } from './styles';

interface BannerProps {
  img: string;
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  return (
    <Container>
      <img src={img} alt="Banner Meu Estilo" />
      <Button>
        Já me cadastrei
      </Button>
    </Container>
  );
}

export default Banner;