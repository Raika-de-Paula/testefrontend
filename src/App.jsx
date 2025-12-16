//App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';
import { AuthProvider } from './contexts/auth';

// Importações das Páginas
import Home from './pages/Home';
import Courses from './pages/Courses';
import Professors from './pages/teachers';
import Login from './pages/Login';
import Account from './pages/account';
import PrivateRoutes from './components/PrivateRoutes';

// Componente principal de roteamento
const AppRoutes = () => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((v) => !v);
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header toggleMenu={toggleMenu} />
      <SidebarMenu open={open} onClose={() => setOpen(false)} />

      <main className="pt-16">
        <Routes>
          {/* Rota Pública: Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers" element={<Professors />} />
          {/*Rota Privada: perfil do usuario*/}
          <Route element={<PrivateRoutes />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <ToastContainer/>
      <AppRoutes />
    </AuthProvider>
  );
}
