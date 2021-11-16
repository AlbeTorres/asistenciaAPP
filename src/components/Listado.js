import React from 'react';
import "../assets/styles/components/Listado.scss"
import Registro from './Registro';


const Listado = ({registros}) => {
    return (
        <div className="listado">
            {registros.map((registro)=>(
                <Registro key={registro._id} date={registro.date}/>
            ))} 
        </div>
    )
}

export default Listado;
