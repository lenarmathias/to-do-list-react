import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    width: 1000px;
    max-width: 90%;
    font-family: "Montserrat", sans-serif;
    background-color: #f0f0f0;
    word-break: break-word;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
  cursor: not-allowed;
}
`;