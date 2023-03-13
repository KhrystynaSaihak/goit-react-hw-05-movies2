import styled from 'styled-components';

export const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  li {
    box-shadow: 2px 6px 6px var(--color-text);
    border: 1px solid var(--color-text);
  }
  img {
    display: block;
    width: 200px;
  }
`;
