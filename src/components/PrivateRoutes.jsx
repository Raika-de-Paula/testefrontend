import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Ajuste o caminho conforme sua estrutura

// O Outlet renderiza os componentes filhos da rota protegida.

const PrivateRoutes = ({Item}) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Navigate to="/" />;
};

export default PrivateRoutes;