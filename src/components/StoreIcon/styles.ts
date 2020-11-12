import styled from 'styled-components';

interface IconProps {
  selected: boolean;
}

export const Icon = styled.div<IconProps>`
  /* height: 100%; */
  /* background-color: #FFF;transparent; */
  background-color: ${props =>
    props.selected ? 'var(--white)' : 'transparent'
  };
  padding: 0 20px;
  height: 45px;
  width: 135px;
  /* text-align: center; */
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props =>
    props.selected ? 'var(--white)' : 'var(--hovergray)'
  };
  }
`;

export const IconLink = styled.a`
  flex-shrink: 0;
  padding: 0 20px;

  img {
    vertical-align: middle;
    max-width: 85px;
    max-height: 45px;
    display: inline-block;
    margin-right: 5px;
  }

`;
