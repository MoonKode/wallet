import React from 'react';
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from 'react-icons/md';
import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  Title,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo MyWallet" />
        <Title>Minhas Finanças</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Gráficos
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Ganhos
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Despesas
        </MenuItemLink>
        <MenuItemButton onClick={logout}>
          <MdExitToApp />
          Sair
        </MenuItemButton>

      </MenuContainer>
    </Container>
  );
};

export default Aside;
