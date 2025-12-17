//components/PrivateRoutes
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Ajuste o caminho conforme sua estrutura

// O Outlet renderiza os componentes filhos da rota protegida.

const PrivateRoutes = () => {
  const { signed } = useAuth();
  return signed ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;