import React from 'react';
import "../assets/styles/components/Listado.scss"
import Registro from './Registro';


const Listado = ({registros, onSelect}) => {
    return (
        <div className="listado">
            {registros.map((registro)=>(
                <Registro key={registro._id} registro={registro} onSelect={onSelect}/>
            ))} 
        </div>
    )
}

export default Listado;
