import React from 'react';
import ReactDOM from 'react-dom'; //biblioteca que permite trabalhar com árvores de elementos do html
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// O que está dentro do DOM é importado para index.html
//os componentes devem ser criados com letras maiúsculas