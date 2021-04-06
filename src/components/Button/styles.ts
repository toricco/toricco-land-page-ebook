import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';
import { shade } from 'polished';

type ContainerProps = {
  isLoading?: boolean;
};

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem 1.6rem;

  border: none;
  border-radius: 0.8rem;
  background: ${({ isLoading }) =>
    isLoading ? shade(0.2, '#6e78fa') : '#6e78fa'};

  text-transform: uppercase;
  font-weight: 700;
  color: #fbfbfb;

  transition: background 300ms;

  :hover {
    background: ${shade(0.2, '#6e78fa')};
  }
`;

const animationLoading = keyframes`
  from {
    transform: rotateZ(0deg);
  } to {
    transform: rotateZ(360deg);
  }
`;

export const LoadingIcon = styled(AiOutlineLoading).attrs(() => ({
  size: 24,
  color: '#FFF',
}))`
  animation: ${animationLoading} 1s infinite;
`;
