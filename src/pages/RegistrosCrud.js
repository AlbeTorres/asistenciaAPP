import React,{useState} from 'react';
import AñadirRegForm from '../components/AñadirRegForm';
import RegistroCrudListado from '../components/RegistroCrudListado';
import RegistroHeader from '../components/RegistroHeader';

const RegistrosCrud = () => {

    const [showAddReg, setShowAddReg]= useState(false);

    const addReg=()=>{
        console.log("ok");
    }

    return (
        <div>
            <div className="header-regi">
                <RegistroHeader showAdd={showAddReg} showAddReg={()=>{setShowAddReg(!showAddReg)}}/>
                {showAddReg && <AñadirRegForm onAdd={addReg}/>}
                
            </div>
            <RegistroCrudListado registros={[{date:"lunes 23 de antiel",trabajadores:[{},{}]}]} onSelect={addReg}/>

        </div>
    )
}

export default RegistrosCrud;
