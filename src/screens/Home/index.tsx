import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useState } from 'react';
import Header from '../../components/Header';
import {
  ebookAndCell,
  DigitalEbook,
  LogoFooter,
  IconFace,
  IconInstagran,
  Checked,
} from '../../assets/images';
import Button from '../../components/Button';
import { Modal } from '../../components/Modal';

import * as S from './styles';

const validationForm = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
});

const url =
  'https://toricco.us1.list-manage.com/subscribe/post?u=526faceb1d0be95fe492dab0a&amp;id=ab7ca52456';

const Home = (): JSX.Element => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header />
      <S.Container>
        <S.Backgroundpath />
        <S.PresentationContainer>
          <S.Presentation>
            <S.TextEbookFree>E-book Gratuito</S.TextEbookFree>
            <S.TitleEbook>
              Como conquistar uma vida financeira saudável
            </S.TitleEbook>
            <S.Description>
              Em apenas 15 páginas te damos o passo a passo para que você
              consiga mudar sua relação com o dinheiro e conquistar estabilidade
              em suas finanças.
              <span>Baixe agora a versão em PDF!</span>
            </S.Description>
            <S.ImgEbookAndCell
              src={ebookAndCell}
              alt="três livros em pé com o titulo, Como conquistar uma vida financeira saudável e um celular com o a mesma frase"
            />
          </S.Presentation>
          <S.FormContainer>
            <S.FormContent>
              <h3>Preencha o formulário abaixo para receber o material</h3>
              <Formik
                initialValues={{ name: '', email: '' }}
                onSubmit={() => console.log('')}
                validationSchema={validationForm}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    <MailchimpSubscribe<{ EMAIL: string; NAME: string }>
                      url={url}
                      render={({ subscribe, status }) => (
                        <>
                          <S.InputContainer
                            isFilled={values.name.length !== 0}
                            hasError={!!errors.name && touched.name}
                          >
                            <S.Label htmlFor="name">Nome</S.Label>
                            <S.Input type="text" name="name" />
                          </S.InputContainer>

                          <ErrorMessage name="name" component={S.InputError} />

                          <S.InputContainer
                            isFilled={values.email.length !== 0}
                            hasError={!!errors.email && touched.email}
                          >
                            <S.Label htmlFor="password">E-mail</S.Label>

                            <S.Input type="email" name="email" />
                          </S.InputContainer>

                          <ErrorMessage name="email" component={S.InputError} />

                          <Button
                            style={{ marginTop: '4rem' }}
                            type="submit"
                            isLoading={status === 'sending'}
                            onClick={() => {
                              if (!errors.email && touched.email) {
                                subscribe({
                                  EMAIL: values.email,
                                  NAME: values.name,
                                });

                                setModal(false);
                              }
                            }}
                          >
                            Quero receber o e-book
                          </Button>

                          {status === 'error' && !modal && (
                            <Modal
                              handleClick={() => setModal(true)}
                              title="Erro ao inscrever"
                              subTitle="Verifique se o email já não foi utilizado ou tente novamente mais tarde."
                              visibleButton
                            />
                          )}

                          {status === 'success' && !modal && (
                            <Modal
                              handleClick={() => setModal(true)}
                              title="Sucesso!"
                              subTitle='Enviamos o e-book para o seu email. Caso não o encontre, verifique o spam ou a aba de "Promoções".'
                              visibleButton
                            />
                          )}
                        </>
                      )}
                    />
                  </Form>
                )}
              </Formik>
            </S.FormContent>
          </S.FormContainer>
        </S.PresentationContainer>
        <S.MiddlePresentation>
          <div>
            <h3>
              Você quer saber <span>como</span> conquistar uma vida financeira
              <span> saudável</span> ?
            </h3>
            <p>
              Nesse e-book GRATUITO da Tô Ricco, te contamos o passo a passo
              para você se planejar financeiramente e conseguir atingir todos os
              seus sonhos e objetivos.
            </p>
            <p>
              Vamos falar um pouco sobre Economia, sobre porquê você deveria
              cuidar da sua vida financeira, quais hábitos são financeiramente
              positivos e como manter esses hábitos saudáveis no seu dia a dia.
            </p>
          </div>
        </S.MiddlePresentation>

        <S.FooterPresentation>
          <div>
            <h3>Com o E-book da Tô Ricco você vai:</h3>
            <p>
              <img src={Checked} alt="sinal de checado em vender" /> Aprender
              sobre controle de gastos
            </p>
            <p>
              <img src={Checked} alt="sinal de checado em vender" /> Aprender
              sobre Planejamento Financeiro
            </p>
            <p>
              <img src={Checked} alt="sinal de checado em vender" /> Aprender a
              estabelecer metas financeiras
            </p>
            <p>
              <img src={Checked} alt="sinal de checado em vender" /> Entender
              sobre a importância da Educação Financeira
            </p>
            <p>
              <img src={Checked} alt="sinal de checado em vender" /> Aprender a
              conquistar uma financeira saudável e atingir seus maiores sonhos e
              objetivos
            </p>
          </div>

          <S.ImgEbookDigital
            src={DigitalEbook}
            alt="três livros em pé com o titulo, Como conquistar uma vida financeira saudável e um celular com o a mesma frase"
          />
        </S.FooterPresentation>
        <S.Footer>
          <S.FooterContent>
            <img
              src={LogoFooter}
              alt="três livros em pé com o titulo, Como conquistar uma vida financeira saudável e um celular com o a mesma frase"
            />
            <p>Todos os direitos reservados © 2021</p>
            <div>
              <a href="https://www.facebook.com/apptoricco/">
                <img
                  src={IconFace}
                  alt="três livros em pé com o titulo, Como conquistar uma vida financeira saudável e um celular com o a mesma frase"
                />
              </a>
              <a href="https://www.instagram.com/apptoricco/">
                <img
                  src={IconInstagran}
                  alt="três livros em pé com o titulo, Como conquistar uma vida financeira saudável e um celular com o a mesma frase"
                />
              </a>
            </div>
          </S.FooterContent>
        </S.Footer>
      </S.Container>
    </>
  );
};

export default Home;
