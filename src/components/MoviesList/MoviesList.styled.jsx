import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
`;

export const MovieItem = styled.li`
  flex: 49%;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  display: block;
  border: 2px solid #bde3f3;
  padding: 10px;
  color: #4b4870;

  &:hover {
    border: 2px solid #c0dbe6;
  }

  &:visited {
    color: #9397b7;
  }
`;

//
