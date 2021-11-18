import React from 'react';
import "../assets/styles/components/Registro.scss"

const Registro = ({registro, onSelect}) => {
    return (
        <div className="registro" onClick={()=>onSelect(registro._id)} >
            <h6>{registro.date}</h6>
            <div>
                <a>Modificar</a>
                <button  value="Eliminar">Eliminar</button> 
            </div>
        </div>
    );
}

export default Registro;

