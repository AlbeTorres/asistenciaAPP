import React from 'react';
import Trabajador from './Trabajador';
import "../assets/styles/components/Listado.scss";

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
