import React,{useState} from 'react';
import Button from './Button';
import RegistroCrudElementForm from './RegistroCrudElementForm';

const RegistroCrudElement = ({registro, onSelect}) => {

    const [showAddWorker, setShowAddWorker]= useState(false);
    return (
        <div>
            <div className="registro" onClick={()=>onSelect(registro._id)} >
                <h6>{registro.date}</h6>
                <div>
                    <Button color={showAddWorker ? 'red' :'green'  }  text={showAddWorker ? 'Cerrar' : 'Agregar' } onClick={()=>{setShowAddWorker(!showAddWorker)}} />
                </div>
            </div>
            { showAddWorker && <RegistroCrudElementForm/>}
            
        </div>
    )
}

export default RegistroCrudElement;
