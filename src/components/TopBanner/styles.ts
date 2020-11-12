import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0);

  width: 100vw;
  /* height: 90px; */

  display: flex;
  flex-direction: column;
`;

export const TopHalf = styled.div`
  display: flex;
  justify-content: center;

  height: min-content;
`;

export const StripBanner = styled.div`
  flex-shrink: 0;
  img {
    width: 100%;
  }
`;

export const BottomHalf = styled.div`
  display: flex;
  align-items: center;
  height: auto;
`;

export const StripIcons = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 20px;
  height: 100%;
`;
