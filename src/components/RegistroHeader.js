import React from 'react';
import Button from '../components/Button.js'
import '../assets/styles/components/Trabajadoresheader.scss';

const RegistroHeader = ({showAdd,showAddReg}) => {
    return (
        <div className="workerform">
            <h1>Gestionar Registros</h1>
            <Button color={showAdd ? 'red' :'green'  }  text={showAdd ? 'Cerrar' : 'Agregar' } onClick={showAddReg} />

        </div>
        
    );
}

export default RegistroHeader;
