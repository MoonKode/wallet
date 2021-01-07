import React, { useMemo } from 'react';
import Toggle from '../Toggle';

import { useTheme } from '../../hooks/theme';

import {
  Container,
  Profile,
  Welcome,
  UserName,
}
  from './styles';
import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  // const [darkTheme, setdarkTheme] = useState(() => (theme.title === 'dark'));
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  const handleChangeTheme = () => {
    // setdarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={theme.title === 'dark'}
        onChange={handleChangeTheme}
      />
      <Profile>
        <Welcome>
          Olá,
          {emoji}
        </Welcome>
        <UserName>Joao Martins</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
