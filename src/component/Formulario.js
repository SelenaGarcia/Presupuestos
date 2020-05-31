import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'

const Formulario = () => {

    const [gasto, guardarGasto] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const agregarGasto = e => {

        e.preventDefault();

        // validar
        if(cantidad<1 || isNaN(cantidad) || gasto.trim()==='')
        {
            guardarError(true)
            return;
        }

        // construir gasto
        const gasto ={
            gasto,
            cantidad,
            id: shortid.generate()
        }
        // pasar el Gasto al container

        // Resetear el Form
        guardarError(false)
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos Aquí</h2>

            {error ? <Error mensaje="Ambos campos son necesarios y obligatorios o el presupuesto es incorrecto"/> : null }

            <div className="campo">
                <label>Observación del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Gasto"
                    value={gasto}
                    onChange={e => guardarGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Costo Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Costo del Gasto"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}

export default Formulario
