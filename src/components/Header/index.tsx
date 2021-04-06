import { Logo } from '../../assets/images';

import { Container, Content } from './styles';

const Header = (): JSX.Element => (
  <Container>
    <Content>
      <a href="https://toricco.com.br">
        <Logo />
      </a>
    </Content>
  </Container>
);

export default Header;
