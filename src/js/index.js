//import react into the bundle

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';

let segundos = 0;
let minutos = 0;
let horas = 0;

setInterval(() => {
  segundos += 1;

  if (segundos === 60) {
    segundos = 0;
    minutos += 1;

    if (minutos === 60) {
      minutos = 0;
      horas += 1;
    }
  }

  ReactDOM.render(<Home horas={horas} minutos={minutos} segundos={segundos} />, document.querySelector('#app'));
}, 1000);
