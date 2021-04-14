import React from 'react';

import * as S from './styles';

import Button from '../Button';

interface ModalProps {
  title: string;
  subTitle?: string;
  handleClick(): void;
  visibleButton: boolean;
}

export const Modal = ({
  handleClick,
  title,
  subTitle,
  visibleButton,
}: ModalProps): JSX.Element => {
  return (
    <S.Container>
      <S.Modal>
        <S.Content>
          <S.Title>{title}</S.Title>

          {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
        </S.Content>

        {visibleButton && <Button onClick={handleClick}>Confirmar</Button>}
      </S.Modal>
    </S.Container>
  );
};
