import React, { useState } from 'react';
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from 'react-icons/md';
import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  Title,
  ToggleMenu,
  ThemeToggleFooter,
} from './styles';
import { Toggle } from '..';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const Aside: React.FC = () => {
  const { logout } = useAuth();
  const { toggleTheme, theme } = useTheme();
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [darkTheme, setdarkTheme] = useState(() => (theme.title === 'dark'));

  const handleChangeTheme = () => {
    setdarkTheme(!darkTheme);
    toggleTheme();
  };

  const handleToggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <Container isOpen={isOpen}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
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

      <ThemeToggleFooter isOpen={isOpen}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={theme.title === 'dark'}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
