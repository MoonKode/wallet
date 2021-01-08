import React from 'react';

import {
  Container,
  Logo,
  Form,
  FormTitle,
} from './styles';
import { Input, Button } from '../../components';
import logoImg from '../../assets/logo.svg';

const Login: React.FC = () => (
  <Container>
    <Logo>
      <img src={logoImg} alt="My Wallet" />
      <h2>Minha Carteira</h2>
    </Logo>
    <Form onSubmit={() => {}}>
      <FormTitle>Entrar</FormTitle>
      <Input
        type="email"
        required
        placeholder="seu email"
      />
      <Input
        type="password"
        required
        placeholder="password"
      />
      <Button type="submit">Entrar</Button>
    </Form>
  </Container>
);

export default Login;
