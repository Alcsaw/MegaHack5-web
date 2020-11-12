import React from 'react';

import { Container, StripBanner, StripIcons, TopHalf, BottomHalf } from './styles';
import stripProgressivo from '../../assets/20101111_strip_progressivoB.webp';
import logoBlack from '../../assets/logo_black.webp';
import logoWhite from '../../assets/logo_white.webp';
import logoAshuaWhite from '../../assets/logo-tarja-ashua-branco.webp';
import logoAshuaBlack from '../../assets/logo-tarja-ashua-preto.webp';
import StoreIcon from '../StoreIcon';



const TopBanner: React.FC = () => {
  return (
    <Container>
      <TopHalf>
        <StripBanner>
          <img src={stripProgressivo} alt="Promoção Black Friday" />
        </StripBanner>
      </TopHalf>

      <BottomHalf>
        <StripIcons>
          <StoreIcon selected={true} imgSelected={logoBlack} imgUnselected={logoWhite} name="Renner" />

          <StoreIcon selected={false} imgSelected={logoAshuaBlack} imgUnselected={logoAshuaWhite} name="Ashua" />
        </StripIcons>
      </BottomHalf>
    </Container>
  );
}

export default TopBanner;