import React, { useState, useEffect } from 'react';
import Movimiento from './component/Movimiento';
import Formulario from './component/Formulario';
import ListadoGastos from './component/ListadoGastos';
import ControlPresupuesto from './component/ControlPresupuesto';


function App() {
  //definir el State
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarcrearGasto] = useState(false)

  //useEffect que actualiza el restante

  useEffect(() => {
    if (crearGasto) {
      guardarGastos([
        ...gastos,
        gasto
      ]);
    }
    //resto del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante)

    //resetear a false el crearGasto
    guardarcrearGasto(false)

  }, [gasto, crearGasto, gastos, restante]);

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
              <Formulario
                guardarGasto={guardarGasto}
                guardarcrearGasto={guardarcrearGasto}
              />
            </div>
            <div className="one-half column">
              <ListadoGastos
                gastos={gastos}
              />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
