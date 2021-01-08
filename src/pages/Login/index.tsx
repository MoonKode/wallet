import React, { useState } from 'react';

import {
  Container,
  Logo,
  Form,
  FormTitle,
} from './styles';
import { Input, Button } from '../../components';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const [email, setemail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const { login } = useAuth();
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="My Wallet" />
        <h2>Minha Carteira</h2>
      </Logo>
      <Form onSubmit={() => login(email, password)}>
        <FormTitle>Entrar</FormTitle>
        <Input
          type="email"
          required
          placeholder="seu email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
