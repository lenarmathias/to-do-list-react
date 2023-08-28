import { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

export const NavigationBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  align-items: center;
`;

export const NavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

export const NavigationItem = styled.li`
  list-style: none;
  text-align: center;
`;

export const StyledNavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;

  &.active {
    font-weight: 700;
  }
`;