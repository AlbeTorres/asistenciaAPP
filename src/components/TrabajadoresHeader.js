import React from 'react';
import Button from '../components/Button.js'
import '../assets/styles/components/Trabajadoresheader.scss';

const TrabajadoresHeader = ({showAdd,showAddWorker}) => {
    return (
        <div className="workerform">
            <h1> Gestionar trabajadores</h1>
            <Button color={showAdd ? 'red' :'green'  }  text={showAdd ? 'Cerrar' : 'Agregar' } onClick={showAddWorker} />

        </div>
    );
}

export default TrabajadoresHeader;
