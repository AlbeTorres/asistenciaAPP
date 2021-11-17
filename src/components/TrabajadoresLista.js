import React from 'react';
import Trabajador from './Trabajador';

const TrabajadoresLista = ({trabajadores}) => {
    return (
        <div className="listado">
            {trabajadores.map((trabajador)=>(
                <Trabajador key={trabajador._id} name={trabajador.name}/>
            ))} 
        </div>
    )
}

export default TrabajadoresLista;
