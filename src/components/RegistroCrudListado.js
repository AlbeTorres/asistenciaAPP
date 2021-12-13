import React from 'react';
import RegistroCrudElement from './RegistroCrudElement';

const RegistroCrudListado = ({registros, onSelect}) => {
    return (
        <div className="l-container">
        
        {
            registros.length > 0 ?

        <div className="listado">
            {registros.map((registro)=>(
                <RegistroCrudElement key={registro._id} registro={registro} onSelect={onSelect}/>
            ))} 
        </div>

        : 
        <h3 className="">No hay registros </h3>
        }
        
    </div>
    )
}

export default RegistroCrudListado;
