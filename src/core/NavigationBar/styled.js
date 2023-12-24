import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.nav`
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