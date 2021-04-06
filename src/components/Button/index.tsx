import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react';

import { Container, LoadingIcon } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button = ({
  children,
  isLoading,
  disabled,
  ...rest
}: PropsWithChildren<ButtonProps>): JSX.Element => (
  <Container disabled={isLoading || disabled} isLoading={isLoading} {...rest}>
    {isLoading ? <LoadingIcon /> : children}
  </Container>
);

export default Button;
