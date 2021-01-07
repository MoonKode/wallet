/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';
import MainHeader from '../mainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = ({ children }) => (
  <Container>
    <MainHeader />
    <Aside />
    <Content>
      {children}
    </Content>
  </Container>
);

export default Layout;
