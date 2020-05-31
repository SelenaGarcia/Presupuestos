import React, { useState } from 'react';
import Movimiento from './component/Movimiento';
import Formulario from './component/Formulario';


function App() {
  //definir el State
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [gastos, guardarGastos] = useState([])

  const agregarNuevoGasto = gasto =>{
    
  }

  return (
    <div className="container">
      <header>
        <h1> Gasto Semanal </h1>

        <div className="contenido-principal contenido">
          <Movimiento
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />

          <div className="row">
            <div className="one-half column">
              <Formulario/>
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
