import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'



const Formulario = ({ guardarGasto, guardarcrearGasto }) => {

    const [nombre, guardarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const agregarGasto = e => {

        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true)
            return;
        }
        guardarError(false);

        // construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        // pasar el Gasto al container

        guardarGasto(gasto);
        guardarcrearGasto(true)


        // Resetear el Form

        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos Aquí</h2>

            {error ? <Error mensaje="Ambos campos son necesarios y obligatorios o el presupuesto es incorrecto" /> : null}

            <div className="campo">
                <label>Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Gasto"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
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
                value='Agregar Gasto'
            />
        </form>
    )
}


Formulario.propTypes = {
    guardarcrearGasto: PropTypes.func.isRequired,
    guardarGasto: PropTypes.func.isRequired
}


export default Formulario
