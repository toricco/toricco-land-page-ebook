import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { BGpath } from '../../assets/images';

export const Container = styled.main`
  background-image: linear-gradient(to bottom, #6e78fa, #a9baff, #6e78fa);

  @media screen and (max-width: 1070px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
export const Backgroundpath = styled.div`
  background-image: url(${BGpath});
  width: 100%;
  max-width: 1050px;
  height: 725px;
  position: absolute;
  margin-left: 40%;
  top: 0;
  @media screen and (max-width: 1070px) {
    display: none;
  }
`;
export const PresentationContainer = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1070px) {
    flex-direction: column;
  }
`;

export const Presentation = styled.div`
  width: 600px;
  position: relative;
  z-index: 999;

  @media screen and (max-width: 1070px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 5%;
  }
`;

export const TextEbookFree = styled.h2`
  color: #12eefc;
  font-size: 48px;
`;

export const TitleEbook = styled.h1`
  color: #fff;
  font-size: 48px;
`;

export const Description = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;

  span {
    display: block;
    margin-top: 24px;
  }
`;

export const ImgEbookAndCell = styled.img`
  margin: 16px 40px;
  @media screen and (max-width: 1070px) {
    width: 500px;

    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    margin: 0 auto;
    margin-left: 8%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  width: 600px;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 99;
  margin-top: 100px;

  @media screen and (max-width: 1070px) {
    justify-content: center;
    margin-top: 0;
    width: 100%;
  }
`;

export const FormContent = styled.div`
  margin: 15px;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  padding: 5%;
  border-radius: 24px;
  width: 440px;

  @media screen and (max-width: 1070px) {
    margin: 15px auto;
  }

  @media screen and (max-width: 450px) {
    margin: 15px 5%;
    width: 100%;
  }
  h3 {
    margin-bottom: 40px;
  }
`;

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

export const Input = styled(Field)`
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

type InputContainerProps = {
  isFilled: boolean;
  hasError?: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: 100%;
  height: 6.25rem;
  padding-top: 0.65rem;
  margin-top: 16px;

  & + div {
    margin-top: 0.95rem;
  }

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
`;

export const InputError = styled.span`
  display: block;
  margin-left: 2.4rem;
  font-size: 1.5rem;
  color: #d97f86;
`;

export const ErrorUserNotFound = styled.span`
  display: block;
  text-align: center;
  margin-top: 0.8rem;
  font-size: 1.5rem;
  color: #d97f86;
`;

export const MiddlePresentation = styled.section`
  margin-top: -200px;
  background: #fff;
  transform: skewY(-6deg);

  div {
    max-width: 1200px;
    margin: 200px auto 100px;
    transform: skewY(6deg);
    @media screen and (max-width: 1200px) {
      padding: 0 5%;
    }
    h3 {
      margin-top: 32px;
      font-size: 32px;
    }
    p {
      margin-top: 16px;
      font-size: 24px;
    }
  }
`;

export const FooterPresentation = styled.section`
  @media screen and (max-width: 1070px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }

  margin: 50px auto;
  margin-top: 100px;
  max-width: 1200px;
  display: flex;
  div {
    width: 600px;
    margin: 0 auto;
    color: #fff;
    h3 {
      font-size: 32px;
    }
    p {
      margin-top: 16px;
      font-size: 24px;
    }
  }
`;

export const ImgEbookDigital = styled.img`
  @media screen and (max-width: 1070px) {
    margin-left: -100px;
    margin-top: 24px;
  }

  @media screen and (max-width: 700px) {
    width: 450px;
    margin: 0 auto;
    margin-left: 8%;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    margin: 0 auto;
    margin-left: 8%;
  }
`;

export const Footer = styled.footer`
  margin-top: -23px;
  background-color: #fff;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1070px) {
    flex-direction: column;
    p {
      margin: 24px 0;
    }
  }
  img {
    height: 40px;
    margin-left: 20px;
  }
`;
