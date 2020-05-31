import React from 'react'
import Gasto from './Gasto'
import PropTypes from 'prop-types'


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

ListadoGastos.protoTypes ={
    gastos: PropTypes.array.isRequired
}


export default ListadoGastos
