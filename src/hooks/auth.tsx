import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
     login(email: string, password: string): void;
     logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider:React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@minha-carteira:logged');
    return !!isLogged;
  });

  const login = (email:string, password:string) => {
    if (email === 'joao.martins@acin.pt' && password === '12345') {
      localStorage.setItem('@minha-carteira:logged', 'true');
      setLogged(true);
    } else {
      alert('credenciais inválidas!');
    }
  };

  const logout = () => {
    localStorage.removeItem('@minha-carteira:logged');
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
