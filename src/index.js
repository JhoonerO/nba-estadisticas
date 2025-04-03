import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './App';
import { UsuarioProvider } from './context/UsuarioContext';
import { TemaProvider } from './context/TemaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsuarioProvider>
      <TemaProvider>
        <App />
      </TemaProvider>
    </UsuarioProvider>
  </React.StrictMode>
);
