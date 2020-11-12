import React from 'react';

import { Icon, IconLink } from './styles';

export interface StoreIconProps {
  name: string;
  selected: boolean;
  imgSelected: string;
  imgUnselected: string;
}

const StoreIcon: React.FC<StoreIconProps> = ({ name, selected, imgSelected, imgUnselected }) => {
  return (
    <Icon selected={selected}>
      <IconLink href="/">
        <img src={selected ? imgSelected : imgUnselected} alt={name} />
      </IconLink>
    </Icon>
  );
}

export default StoreIcon;