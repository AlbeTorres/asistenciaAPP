import React from 'react';
import "../assets/styles/components/Registro.scss"

const Registro = ({date}) => {
    return (
        <div className="registro">
        <h6>{date}</h6>
        <div>
        <a>Modificar</a>
        <button value="Eliminar">Eliminar</button>
            
            
        </div>
        </div>
    );
}

export default Registro;
