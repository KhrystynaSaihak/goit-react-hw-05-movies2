import styled from 'styled-components';

export const ReviewContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  li {
    box-shadow: 2px 6px 6px var(--color-text);
    border: 1px solid var(--color-text);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
