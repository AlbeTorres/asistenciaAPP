import React from 'react';
import Button from '../components/Button.js'

const TrabajadoresHeader = ({showAdd,showAddWorker}) => {
    return (
        <div>
            <h1 className="workerform"> Gestionar trabajadores</h1>
            <Button color={showAdd ? 'red' :'green'  }  text={showAdd ? 'Cerrar' : 'Agregar' } onClick={showAddWorker} />

        </div>
    );
}

export default TrabajadoresHeader;
