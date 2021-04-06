import React, { InputHTMLAttributes, PropsWithRef } from 'react';
import { useField } from 'formik';

import { cpfMask, cardMask, cvvMask, monthMask, yearMask } from './masks';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  noFocus?: boolean;
  mask?: 'cpf' | 'card' | 'cvv' | 'month' | 'year';
}

const masks = {
  cpf: cpfMask,
  card: cardMask,
  cvv: cvvMask,
  month: monthMask,
  year: yearMask,
};

export const Input = ({
  name,
  label,
  noFocus,
  mask,
  ...rest
}: PropsWithRef<InputProps>): JSX.Element => {
  const [field, meta] = useField(name);

  return (
    <>
      <S.Container
        isFilled={!!meta.value}
        hasError={meta.touched && !!meta.error}
        noFocus={noFocus}
      >
        {label && <S.Label>{label}</S.Label>}

        <S.Input
          onKeyUp={event => mask && masks[mask](event)}
          {...field}
          {...rest}
        />
      </S.Container>

      {meta.touched && meta.error ? (
        <S.InputError>{meta.error}</S.InputError>
      ) : null}
    </>
  );
};
