import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Modal = styled.section`
  width: 80%;
  max-width: 45rem;
  min-height: 22rem;
  background: #fbfbfb;
  border-radius: 1.6rem;

  padding: 1.6rem 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  margin-bottom: 2.4rem;
`;

export const SubTitle = styled.p``;
