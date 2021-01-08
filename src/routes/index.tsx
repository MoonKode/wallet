import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import App from './app.routes';
import Login from './auth.routes';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Login />
    {/* <App /> */}
  </BrowserRouter>
);

export default Routes;
