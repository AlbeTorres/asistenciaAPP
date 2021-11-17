import React from 'react';

const Trabajador = ({name}) => {
    return (
        <div className="registro">
            <h6>{name}</h6>
            <div>
                <a>Modificar</a>
                <button value="Eliminar">Eliminar</button> 
            </div>
        </div>
    )
}

export default Trabajador;
