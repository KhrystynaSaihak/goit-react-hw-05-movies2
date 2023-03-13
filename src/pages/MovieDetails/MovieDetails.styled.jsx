import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackBtn = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  margin-right: 20px;
  transition: background-color 0.5s, color 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  margin-bottom: 20px;
  background-color: var(--color-text);

  &:hover {
    color: white;
    background-color: var(--color-btn);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinkBox = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  margin-bottom: 15px;

  a {
    display: block;
    text-decoration: none;
    color: white;
    background-color: var(--color-text);
    padding: 10px;
  }
`;
