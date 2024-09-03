import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css'; // Importa o arquivo CSS que inclui as diretivas do Tailwind CSS

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
