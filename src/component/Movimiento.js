import React, { Fragment, useState } from 'react'
import Error from './Error'


const Movimiento = ({guardarPresupuesto, guardarRestante}) => {

    //definir state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    //función de lectura del Presupuesto
    const definirPresupuestoSemanal = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        
        //validación
        if (cantidad < 1 || isNaN (cantidad)) { 
            guardarError(true);
            return;
        }
        
        //Si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }

    return (
        <Fragment>
            <h2>Colocar tu Presupuesto</h2>
            {error ? <Error mensaje = "El Presupuesto es Incorrecto"/>: null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Colocar tu Presupuesto"
                    onChange={definirPresupuestoSemanal}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
};

export default Movimiento