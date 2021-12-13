import React from 'react';

const AñadirRegForm = ({}) => {

    const onSubmit=()=>{
        console.log("onSubmit")
    }
    return (
        <form className="form" onSubmit={onSubmit}>
        <label className="tittle-form">Añadir Registro:</label>
        <div className="form-container">
            <input type="text" placeholder="Fecha del Registro" className="workerinput" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" className="workersubmit" value="Añadir"/>
        </div>
    </form>
    );
}

export default AñadirRegForm;
