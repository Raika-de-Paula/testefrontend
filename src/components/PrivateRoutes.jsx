import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Ajuste o caminho conforme sua estrutura

// O Outlet renderiza os componentes filhos da rota protegida.

const PrivateRoutes = () => {
  const { signed } = useAuth();
  
  // Se 'signed' for true, renderiza a rota filha (Outlet)
  // Se 'signed' for false, redireciona para a página de login
  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;