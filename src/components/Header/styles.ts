import styled from 'styled-components';

export const Container = styled.header`
  height: 7rem;
  align-items: center;
  justify-content: center;
  background: #6e78fa;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1070px) {
    justify-content: center;
  }
`;
