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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: 20px;
    }
  }

  button {
    cursor: pointer;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }

  button:disabled {
    cursor: not-allowed;
  }
`;