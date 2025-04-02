import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './App';
import { UsuarioProvider } from './context/UsuarioContext'; // 👈 Agrega esto

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsuarioProvider> {/* 👈 Envolvemos la app */}
      <App />
    </UsuarioProvider>
  </React.StrictMode>
);
