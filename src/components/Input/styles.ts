import styled, { css } from 'styled-components';

export const Label = styled.label`
  position: absolute;
  top: calc(50% - 0.65rem);
  left: 2rem;

  padding: 0 0.4rem;

  font-size: 1.5rem;
  color: #b2b2b2;

  background: #fff;

  transition: top 200ms;
`;

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;

  padding: 0 2.4rem;

  border-radius: 0.8rem;
  border: 0.2rem solid rgba(110, 120, 250, 0.08);

  outline: none;

  :focus {
    border: 0.2rem solid rgb(110, 120, 250);
  }
`;

interface ContainerProps {
  isFilled: boolean;
  hasError?: boolean;
  noFocus?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 6.25rem;
  padding-top: 0.65rem;

  :focus-within {
    label {
      top: 0rem;

      ${({ hasError }) =>
        !hasError &&
        css`
          color: rgb(110, 120, 250);
        `}
    }
  }

  ${({ isFilled }) =>
    isFilled &&
    css`
      ${Label} {
        top: 0rem;
        color: rgb(110, 120, 250);
      }

      ${Input} {
        border: 0.2rem solid rgb(110, 120, 250);
      }
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      ${Label} {
        color: #d97f86;
      }

      ${Input} {
        border: 0.2rem solid #d97f86;
      }
    `}

  ${({ noFocus }) =>
    noFocus &&
    css`
      ${Label} {
        color: #b2b2b2;
      }

      ${Input} {
        border: 0.2rem solid rgba(110, 120, 250, 0.08);
      }
    `}
`;

export const InputError = styled.span`
  display: block;

  margin-left: 2.4rem;

  font-size: 1.5rem;
  color: #d97f86;
`;
