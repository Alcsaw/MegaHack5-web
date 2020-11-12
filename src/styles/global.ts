import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
    *::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
    border: 0;
    background-color: #dcdcdc;
    }
  }

  button {
    cursor: pointer;
  }

  :root {
    --white: #FFF;
    --black: #000;
    --gray: #D6D6D6;
    --hover-gray: #333333;
    --scrollbar-gb: #999999;
    --modal-black: #2A2A2A;
    --modal-gray: #f5f5f5;
  }
`;
