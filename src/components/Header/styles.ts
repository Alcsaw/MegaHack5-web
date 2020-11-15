import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 101px; */
  /* background: red; */

  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 0 25px rgba(0,0,0,0.25);
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 65px;
  padding: 0 20px;

  img {
    margin-right: 25px;
  }
`;

export const ProductsSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  /* background: var(--gray); */
  height: 40px;
  background: rgba(0,0,0,.16);
  border-radius: 5px;
  border: none;

  /* button {
    width: 24px;
    height: 24px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

  } */
`;

export const SearchInput = styled.input`
  text-transform: none;
  height: 40px;
  padding: 8px 50px 8px 19px;
  font-size: 13px;
  word-spacing: 2px;
  font-weight: normal;
  color: white;
  background: transparent;
  word-spacing: 2px;

  color: var(--black);
  width: 100%;
  /* padding: 8px 50px 8px 19px; */
  margin-right: 50px;
  border: none;

  &::placeholder {
    color: var(--black);
  }
`;

export const SearchButton = styled.button`
  margin-left: -10px;
  margin-right: 20px;
  padding-left: 40px;
  background: transparent;
  border: none;
`;

export const HeaderButton = styled.button`
  border: none;
  background: transparent;
`;
