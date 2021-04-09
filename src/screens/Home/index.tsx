import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Cookie from 'js-cookie';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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

import * as S from './styles';

interface FormValues {
  name: string;
  email: string;
}

const validationForm = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
});

const Home = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const history = useHistory();

  useLayoutEffect(() => {
    const findCookie = Cookie.get('toricco-token');

    if (findCookie) Cookie.remove('toricco-token');
  }, [history]);

  const handleSubmit = useCallback(
    async ({ name, email }: FormValues): Promise<void> => {
      const url =
        'https://toricco.us1.list-manage.com/subscribe/post?u=526faceb1d0be95fe492dab0a&amp;id=ab7ca52456';

      setLoading(true);
      setUserNotFound(false);

      const formData = new FormData();

      formData.append('FNAME', name);
      formData.append('EMAIL', email);

      try {
        const response = await axios.post(url, formData, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        });

        console.log('mailchimp response: ', response);
      } catch (error) {
        console.log('mailchimp error: ', error);
      }
    },
    [],
  );

  const handleInputFocus = useCallback(() => {
    setUserNotFound(false);
  }, []);
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
                onSubmit={handleSubmit}
                validationSchema={validationForm}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    <S.InputContainer
                      isFilled={values.name.length !== 0}
                      hasError={(!!errors.name && touched.name) || userNotFound}
                    >
                      <S.Label htmlFor="name">Nome</S.Label>
                      <S.Input
                        id="name"
                        type="name"
                        name="name"
                        onFocus={handleInputFocus}
                      />
                    </S.InputContainer>

                    <ErrorMessage name="name" component={S.InputError} />

                    <S.InputContainer
                      isFilled={values.email.length !== 0}
                      hasError={
                        (!!errors.email && touched.email) || userNotFound
                      }
                    >
                      <S.Label htmlFor="password">E-mail</S.Label>

                      <S.Input
                        id="email"
                        type="email"
                        name="email"
                        onFocus={handleInputFocus}
                      />
                    </S.InputContainer>

                    <ErrorMessage name="email" component={S.InputError} />

                    {userNotFound && (
                      <S.ErrorUserNotFound>
                        Nome ou E-mail inválidos
                      </S.ErrorUserNotFound>
                    )}

                    <Button
                      style={{ marginTop: '4rem' }}
                      type="submit"
                      isLoading={loading}
                    >
                      Quero receber o e-book
                    </Button>
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
            <p>
              O livro foi dividido em 5 partes, que exploram os seguintes
              aspectos:
            </p>
            <p>1) Entender sobre a importância da Edicação financeira</p>
            <p>2) Aprender sobre Planejamento Financeiro</p>
            <p>3) Entender mais sobre</p>
            <p>4) Aprender a estabelecer metas financeiras</p>
            <p>5) Aprender sobre controle de gastos</p>
            <h3>Tô Ricco é você no controle da sua vida financeira.</h3>
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
