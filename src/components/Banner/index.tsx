import React from 'react';

import { Figure } from './styles';

interface BannerProps {
  img: string;
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  return (
    <Figure>
      <img src={img} alt="Banner Meu Estilo" />
    </Figure>
  );
}

export default Banner;