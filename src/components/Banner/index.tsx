import React from 'react';

// import { Container } from './styles';

interface BannerProps {
  img: string;
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  return (
    <figure>
      <img src={img} alt="Banner Meu Estilo" />
    </figure>
  );
}

export default Banner;