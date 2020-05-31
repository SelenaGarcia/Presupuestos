import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => (

    <div className="gastos-realizados">
        <h2>Listado de Gastos</h2>
        {gastos.map(gasto =>(
            <Gasto
            key={gasto.id}
            gasto={gasto}
            />
        )) }
    </div>
);

export default ListadoGastos
