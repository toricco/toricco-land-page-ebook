import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1.8rem 'Roboto', sans-serif;
    color: #666;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  .container {
    width: 90%;
    max-width: 46rem;
  }
`;
