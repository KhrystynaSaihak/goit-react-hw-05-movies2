import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-right: 20px;
  transition: background-color 0.5s, color 0.5s;

  &.active {
    color: white;
    background-color: var(--color-blue);
  }

  &:hover {
    color: white;
    background-color: var(--color-blue-hover);
  }
`;
