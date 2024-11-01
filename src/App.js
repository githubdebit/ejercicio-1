// Ejercicio 1

import './App.css';
import Saludo from './Saludo.js';
import Despedida from './Despedida.js';

// Necesario para usar useState
import { useState } from 'react';

function App() {

  // Define flag y setFlag al inicio
  const [flag, setFlag] = useState(true);
  let mensaje;

  // Cambia el estado de flag cuando se hace clic. !flag devuelve el opuesto porque es boolean
  const cambiaFlag = () => setFlag(!flag); 
  


  if (flag) {
    mensaje= <Saludo nombre="Pablo"></Saludo>

  }
  else {
    mensaje= <Despedida nombre="Pablo"></Despedida>
  }
  
  return ( 
    <>
    <div className="App">
        <header className="App-header">
        <div>{mensaje}</div>
        <button class="button" onClick={cambiaFlag}><h1>Cambiar flag</h1></button>
        </header>
      </div>
    </>
  );

}

export default App;
